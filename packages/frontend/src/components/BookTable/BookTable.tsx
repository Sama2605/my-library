import { Book } from 'types'
import { BookTableCell } from './BookTableCell'
import { CopyToClipboard } from 'components/common'
import { BookTableCellLink } from './BookTableCellLink'
import { ReactNode } from 'react'

interface Props {
  data: Book[]
}

export function BookTable({ data }: Props) {
  const headers = ['Title', 'Author', 'Published', 'Link', 'Rating', 'Status']

  return (
    <table className="table-auto border-collapse bg-red w-full">
      <thead>
        <tr>
          {headers.map((name, index) => (
            <th className="text-left p-4 font-light text-gray-400" key={index}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, title, author, published, link, rating, status }) => (
          <tr className="border border-slate-150" key={id}>
            <BookTableCell important>
              <BookTableCopy>
                {title} <CopyToClipboard textToCopy={title} />
              </BookTableCopy>
            </BookTableCell>
            <BookTableCell>
              <BookTableCopy>
                {author} <CopyToClipboard textToCopy={author} />
              </BookTableCopy>
            </BookTableCell>
            <BookTableCell>{published}</BookTableCell>
            <BookTableCell>
              <BookTableCellLink href={link}>{title}</BookTableCellLink>
            </BookTableCell>
            <BookTableCell>{rating}</BookTableCell>
            <BookTableCell>{status}</BookTableCell>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

interface BookTableCopyProps {
  children: ReactNode
}

function BookTableCopy({ children }: BookTableCopyProps) {
  return <div className="flex items-center gap-2">{children}</div>
}
