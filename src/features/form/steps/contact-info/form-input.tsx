import { ChangeEvent } from 'react'

interface InputProps {
  type: 'text' | 'email' | 'tel'
  placeholder: string
  value: string
  onChange: (value: string) => void
  hasError?: boolean
}

export function FormInput({
  type,
  placeholder,
  value,
  onChange,
  hasError = false,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className={`w-full p-4 pr-10 border ${
        hasError ? 'border-red-500' : 'border-gray-200'
      } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent`}
    />
  )
}
