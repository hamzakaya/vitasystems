import { TrackingError } from './types'

interface ErrorMessageProps {
  error: TrackingError
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null

  return (
    <p className="mb-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg">
      {error}
    </p>
  )
}
