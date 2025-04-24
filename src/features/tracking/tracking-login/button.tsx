interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
}

export function Button({ onClick, text = 'Sorgula' }: IButton) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-indigo-600 rounded-full text-white font-medium hover:bg-indigo-700 transition cursor-pointer"
    >
      {text}
    </button>
  )
}
