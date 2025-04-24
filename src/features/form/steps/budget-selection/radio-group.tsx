import { FormError } from '../../../../hooks/useMultiStepForm'
import { RadioIndicator } from './radio-indicator'
import { Option } from './types'

interface RadioButtonProps {
  id: string
  name: string
  value: string
  checked: boolean
  onChange: () => void
  label: React.ReactNode
}

function RadioButton({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}: RadioButtonProps) {
  return (
    <div className="relative">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`flex items-center p-4 border-2 rounded-xl transition cursor-pointer ${
          checked ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

interface RadioGroupProps<T extends string> {
  name: string
  options: Option[]
  value: T
  onChange: (value: T) => void
  error?: FormError
  columns?: 1 | 2 | 3 | 4
  renderLabel?: (option: Option, isSelected: boolean) => React.ReactNode
}

export function RadioGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  error,
  columns = 1,
  renderLabel,
}: RadioGroupProps<T>): React.ReactElement {
  const defaultRenderLabel = (option: Option, isSelected: boolean) => (
    <>
      <RadioIndicator selected={isSelected} />
      <span className="font-medium text-indigo-950">{option.label}</span>
    </>
  )

  return (
    <div>
      {error && (
        <p className="mb-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg">
          {error}
        </p>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {options.map((option) => (
          <RadioButton
            key={option.id}
            id={option.id}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value as T)}
            label={(renderLabel || defaultRenderLabel)(
              option,
              value === option.value,
            )}
          />
        ))}
      </div>
    </div>
  )
}
