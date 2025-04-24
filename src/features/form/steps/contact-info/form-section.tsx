import { ReactNode } from 'react'

interface FormSectionProps {
  title: string
  description?: string
  children: ReactNode
}

export function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl font-semibold text-indigo-950 mb-4">{title}</h2>
      {description && <p className="text-gray-500 mb-8">{description}</p>}
      {children}
    </div>
  )
}
