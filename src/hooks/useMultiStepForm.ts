import { useMemo, useReducer, useOptimistic, useTransition } from 'react'
import api from '../api'
import sleep from '../common/utils/sleep'

// Initial state
const initialState: FormState = {
  step: 1,
  data: {
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    budget: '',
  },
  errors: {},
  trackingCode: null,
}

export default function useMultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [isPending, startTransition] = useTransition()

  const [formData, updateFormData] = useOptimistic(
    { ...state.data },
    (currentData, newData: Partial<FormData>) => ({
      ...currentData,
      ...newData,
    }),
  )

  const [submissionState, updateSubmission] = useOptimistic(
    { isSubmitting: false },
    (currentState, newState: { isSubmitting: boolean }) => ({
      ...currentState,
      ...newState,
    }),
  )

  const validators = useMemo(
    () => ({
      1: ({ name, email, phone, company }: FormData) => ({
        ...(name && name.trim() ? {} : { name: 'Ad-Soyad zorunlu' }),
        ...(email && /\S+@\S+\.\S+/.test(email)
          ? {}
          : { email: 'Geçersiz e-posta' }),
        ...(phone && phone.trim() ? {} : { phone: 'Telefon zorunlu' }),
        ...(company && company.trim() ? {} : { company: 'Şirket zorunlu' }),
      }),
      2: ({ services }: FormData) =>
        services?.length ? {} : { services: 'En az bir hizmet seçin' },
      3: ({ budget }: FormData) => (budget ? {} : { budget: 'Bütçe seçin' }),
      4: () => ({}),
    }),
    [],
  )

  function validate() {
    const errors =
      validators[state.step as keyof typeof validators]?.(state.data) ?? {}

    if (Object.keys(errors).length > 0) {
      dispatch({ type: FormActions.SET_ERRORS, errors })
      return false
    }
    return true
  }

  function submitForm() {
    startTransition(async () => {
      if (!validate()) return
      updateSubmission({ isSubmitting: true })

      try {
        const formData = new FormData()

        Object.entries(state.data).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((item) => formData.append(`${key}[]`, item))
          } else {
            formData.append(key, value as string)
          }
        })

        await sleep(1000)

        const response = await api.register(formData)
        const trackingCode = response.tracking_number

        startTransition(() => {
          dispatch({ type: FormActions.SET_TRACKING_CODE, code: trackingCode })
        })

        updateSubmission({ isSubmitting: false })
      } catch (error) {
        console.error('Form submission error:', error)
        dispatch({
          type: FormActions.SET_ERRORS,
          errors: {
            form: 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
          },
        })

        updateSubmission({ isSubmitting: false })
      }
    })
  }

  function updateField(field: keyof FormData, value: any) {
    startTransition(() => {
      updateFormData({ [field]: value })
      dispatch({ type: FormActions.UPDATE_FIELD, field, value })
    })
  }

  return {
    // State
    currentStep: state.step,
    formData: formData,
    errors: state.errors,
    isSubmitting: submissionState.isSubmitting,
    submitted: !!state.trackingCode,
    trackingCode: state.trackingCode,
    isPending,

    // Actions
    updateField,

    nextStep: () => {
      if (validate()) {
        startTransition(() => {
          dispatch({ type: FormActions.NEXT_STEP })
        })
      }
    },

    prevStep: () => {
      startTransition(() => {
        dispatch({ type: FormActions.PREV_STEP })
      })
    },

    goToStep: (step: number) => {
      startTransition(() => {
        dispatch({ type: FormActions.GO_TO_STEP, step })
      })
    },

    submitForm,
    resetForm: () => dispatch({ type: FormActions.RESET }),
    validateStep: validate,
  }
}

// Reducer
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case FormActions.NEXT_STEP:
      return { ...state, step: Math.min(state.step + 1, 7) }
    case FormActions.PREV_STEP:
      return { ...state, step: Math.max(state.step - 1, 1) }
    case FormActions.GO_TO_STEP:
      return { ...state, step: action.step }
    case FormActions.UPDATE_FIELD:
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: null },
      }
    case FormActions.SET_ERRORS:
      return { ...state, errors: action.errors }
    case FormActions.SET_TRACKING_CODE:
      return { ...state, trackingCode: action.code, step: 5 }
    case FormActions.RESET:
      return initialState
    default:
      return state
  }
}

// Types
export type FormData = {
  name: string
  email: string
  phone: string
  company: string
  services: string[]
  budget: string
}

export type FormErrors = Record<string, string | null>
export type FormError = FormErrors[number]

type FormState = {
  step: number
  data: FormData
  errors: FormErrors
  trackingCode: string | null
}

enum FormActions {
  NEXT_STEP,
  PREV_STEP,
  GO_TO_STEP,
  RESET,
  UPDATE_FIELD,
  SET_ERRORS,
  SET_TRACKING_CODE,
}

// Action types
type FormAction =
  | { type: FormActions.NEXT_STEP | FormActions.PREV_STEP | FormActions.RESET }
  | { type: FormActions.GO_TO_STEP; step: number }
  | { type: FormActions.UPDATE_FIELD; field: keyof FormData; value: any }
  | { type: FormActions.SET_ERRORS; errors: FormErrors }
  | { type: FormActions.SET_TRACKING_CODE; code: string }
