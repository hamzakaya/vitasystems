import { ReactNode } from 'react'
import { icons } from './icons'

interface FormFieldProps {
  label: string
  icon: string
  error?: string | null
  children: ReactNode
}

export default function FormField({
  label,
  icon,
  error,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-indigo-950 font-medium mb-2">{label}</label>
      <div className="relative">
        {children}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <div
            className={`w-5 h-5 ${error ? 'text-red-500' : 'text-gray-400'}`}
          >
            {icons[icon]}
          </div>
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
