import { FormError } from '../../../../hooks/useMultiStepForm'
import { formConstants } from '../../constants'
import { ServiceIcons } from './icons'
import ServiceOption from './service-option'

interface IProps {
  selectedServices: string[]
  onToggle: (service: string) => void
  error?: FormError
}

export default function ServiceSelection({
  selectedServices,
  onToggle,
  error,
}: IProps) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-indigo-950 mb-4">
        Hizmetlerimiz
      </h2>
      <p className="text-gray-500 mb-8">İlgilendiğiniz hizmeti seçiniz</p>

      {error && (
        <p className="mb-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formConstants.services.map((service) => (
          <ServiceOption
            key={service.id}
            id={`service-${service.id}`}
            label={service.label}
            icon={ServiceIcons[service.value]}
            isSelected={selectedServices.includes(service.value)}
            onToggle={() => onToggle(service.value)}
          />
        ))}
      </div>
    </div>
  )
}
