import { ButtonHTMLAttributes } from 'react'
import { icons } from './icons'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  loadingText?: string
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  loading = false,
  loadingText,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-indigo-600 rounded-full text-white font-medium ${
        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
      } transition mx-auto flex items-center justify-center cursor-pointer`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <>
          {icons.spinner({
            className: 'animate-spin -ml-1 mr-2 h-4 w-4 text-white',
          })}
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </button>
  )
}
