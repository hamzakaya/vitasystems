import { FormData, FormErrors } from '../../../../hooks/useMultiStepForm'
import { FormSection } from './form-section'
import { formConstants } from '../../constants'
import { FormInput } from './form-input'
import FormField from './form-field'

interface ContactInfoProps {
  formData: FormData
  updateField: <T extends keyof FormData>(field: T, value: FormData[T]) => void
  errors: FormErrors
}

export default function ContactInfo({
  formData,
  updateField,
  errors,
}: ContactInfoProps) {
  return (
    <FormSection
      title="İletişim Bilgileri"
      description="Aşağıdaki bilgileri eksiksiz doldurunuz."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formConstants.contactInfo.map(
          ({ key, type, label, placeholder, icon }) => (
            <FormField key={key} label={label} icon={icon} error={errors[key]}>
              <FormInput
                type={type}
                placeholder={placeholder}
                value={formData[key]}
                onChange={(value) => updateField(key, value)}
                hasError={!!errors[key]}
              />
            </FormField>
          ),
        )}
      </div>
    </FormSection>
  )
}
