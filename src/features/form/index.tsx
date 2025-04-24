import useMultiStepForm from '../../hooks/useMultiStepForm'
import ProgressBar from '../../components/progress-bar'
import Navigation from '../../components/navigation'
import Header from '../Header'

import ContactInfo from './steps/contact-info'
import SubmitRequest from './steps/submit-request'
import BudgetSelection from './steps/budget-selection'
import SuccessConfirmation from './steps/success-confirmation'
import ServiceSelection from './steps/service-selection/index'

export default function MultiStepForm() {
  const {
    currentStep,
    formData,
    errors,
    trackingCode,
    isSubmitting,
    updateField,
    nextStep,
    prevStep,
    submitForm,
  } = useMultiStepForm()

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service]

    updateField('services', updatedServices)
  }

  function renderStepContent() {
    switch (currentStep) {
      case 1:
        return (
          <ContactInfo
            formData={formData}
            updateField={updateField}
            errors={errors}
          />
        )
      case 2:
        return (
          <ServiceSelection
            selectedServices={formData.services}
            onToggle={handleServiceToggle}
            error={errors.services}
          />
        )
      case 3:
        return (
          <BudgetSelection
            selectedBudget={formData.budget}
            onChange={(value) => updateField('budget', value)}
            error={errors.budget}
          />
        )
      case 4:
        return (
          <SubmitRequest onSubmit={submitForm} isSubmitting={isSubmitting} />
        )
      case 5:
        return <SuccessConfirmation trackingCode={trackingCode || ''} />

      default:
        return null
    }
  }

  return (
    <div>
      <Header currentStep={currentStep} />

      <div className="bg-white rounded-3xl shadow-sm w-full max-w-2xl mx-auto overflow-hidden transition-all duration-300 pt-8">
        <ProgressBar currentStep={currentStep} />

        <div className="px-12 pb-6 transition-all duration-500 ease-in-out min-h-96">
          {renderStepContent()}
        </div>

        <Navigation
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </div>
  )
}
