import React from 'react'

/* Button */
type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'link'
}

export function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: ButtonProps) {
  const baseClasses = 'font-medium transition cursor-pointer'

  const variantClasses = {
    primary:
      'px-6 py-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 block mx-auto my-5',
    link:
      'text-indigo-600 hover:text-indigo-800 text-sm inline-flex items-center transition-colors',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

/* Divider */

type DividerProps = {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return <div className={`h-px bg-gray-200 w-full my-4 ${className}`}></div>
}

/* StatusBadge */

type StatusBadgeProps = {
  children: React.ReactNode
  className?: string
}

export function StatusBadge({ children, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium ${className}`}
    >
      {children}
    </span>
  )
}

/* InfoField */

type InfoFieldProps = {
  label: string
  value: string | number
  className?: string
}

export function InfoField({ label, value, className = '' }: InfoFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-sm text-gray-500 mb-1">{label}</span>
      <span
        className={`text-gray-800 font-medium ${
          label === 'E-Posta' ? 'break-all' : ''
        }`}
      >
        {value}
      </span>
    </div>
  )
}
