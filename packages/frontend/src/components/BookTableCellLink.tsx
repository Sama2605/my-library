import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export function BookTableCellLink({ href, children }: Props) {
  return <a href={href}>{children} na Lubię czytać</a>
}
