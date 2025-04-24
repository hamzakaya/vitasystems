interface IProps {
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}

export function Section({
  title,
  description,
  className = '',
  children,
}: IProps) {
  return (
    <div className={`animate-fadeIn ${className}`}>
      <h2 className="text-xl font-semibold text-indigo-950 mb-4">{title}</h2>
      {description && <p className="text-gray-500 mb-8">{description}</p>}
      {children}
    </div>
  )
}
