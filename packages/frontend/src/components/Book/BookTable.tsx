import { Book } from 'types'
import { BookTableCell } from './BookTableCell'
import { CopyToClipboard } from 'components/common'
import { ReactNode } from 'react'
import { BookTableCellLink } from './BookTableCellLink'
import { BookAvailable } from './BookAvailable'
import { StarIcon, TreeDotsIcon } from 'components/common/Icon'

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
          <th></th>
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
              <BookTableCellLink href={link} />
            </BookTableCell>
            <BookTableCell className="text-indigo-700 flex items-center text-xs gap-1">
              <StarIcon /> <div className="text-gray-600">{rating}</div>
            </BookTableCell>
            <BookTableCell>
              <BookAvailable status={status} />
            </BookTableCell>
            <BookTableCell>
              <TreeDotsIcon />
            </BookTableCell>
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
