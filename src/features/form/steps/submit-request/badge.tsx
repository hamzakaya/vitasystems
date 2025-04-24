import { icons } from './icons'

type BadgeProps = {
  icon: keyof typeof icons
  iconClass?: string
  bgClass?: string
}

export function Badge({
  icon,
  iconClass = 'w-12 h-12 text-indigo-600',
  bgClass = 'bg-indigo-100 p-6 rounded-full',
}: BadgeProps) {
  return <div className={bgClass}>{icons[icon]({ className: iconClass })}</div>
}
