import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  important?: boolean
}

export function BookTableCell({ children, important }: Props) {
  const importantClasses = 'text-gray-900 font-semibold'
  const classes = 'text-gray-600'

  return <td className={`p-4 ${important ? importantClasses : classes} `}>{children}</td>
}
