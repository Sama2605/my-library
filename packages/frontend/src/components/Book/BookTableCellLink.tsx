import { BookIcon } from 'components/common/Icon'

interface Props {
  href: string
}

export function BookTableCellLink({ href }: Props) {
  return (
    <div className="flex items-center gap-1 text-blue-400 text-xs hover:text-blue-600">
      <BookIcon />
      <a href={href} target="_blank">
        See on Lubimy czytać
      </a>
    </div>
  )
}
