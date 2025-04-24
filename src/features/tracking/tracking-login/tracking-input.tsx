interface TrackingInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function TrackingInput({
  value,
  onChange,
  placeholder = 'Takip Kodu',
}: TrackingInputProps) {
  return (
    <div className="max-w-xs mx-auto mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-4 border border-gray-200 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
      />
    </div>
  )
}
