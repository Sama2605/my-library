import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  important?: boolean
  className?: string
}

export function BookTableCell({ children, important, className = '' }: Props) {
  const importantClasses = 'text-gray-900 font-semibold'
  const classes = 'text-gray-600'

  return <td className={`p-5 ${important ? importantClasses : classes} ${className} `}>{children}</td>
}
