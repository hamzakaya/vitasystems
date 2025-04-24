interface IProps {
  selected: boolean
}

export function RadioIndicator({ selected }: IProps) {
  return (
    <div
      className={`w-5 h-5 rounded-full border-2 ${
        selected ? 'border-indigo-600' : 'border-gray-300'
      } flex items-center justify-center mr-4`}
    >
      <div
        className={`w-3 h-3 rounded-full bg-indigo-600 transition-opacity ${
          selected ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
