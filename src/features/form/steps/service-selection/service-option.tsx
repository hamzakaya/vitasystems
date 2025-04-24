interface IProps {
  id: string
  label: string
  icon: React.ReactNode
  isSelected: boolean
  onToggle: () => void
}

export default function ServiceOption({
  id,
  label,
  icon,
  isSelected,
  onToggle,
}: IProps) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id={id}
        name="service"
        className="sr-only peer"
        checked={isSelected}
        onChange={onToggle}
      />
      <label
        htmlFor={id}
        className={`flex items-center p-5 border-2 ${
          isSelected
            ? 'border-indigo-600 bg-indigo-50'
            : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
        } rounded-xl transition cursor-pointer`}
      >
        <div className="mr-4 bg-indigo-100 p-3 rounded-lg">{icon}</div>
        <span className="font-medium text-indigo-950">{label}</span>
      </label>
    </div>
  )
}
