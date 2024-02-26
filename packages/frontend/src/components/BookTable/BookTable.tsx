import { Book } from 'types'
import { BookTableCell } from './BookTableCell'
import { BookTableCellLink } from 'components/BookTableCellLink'

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
            <BookTableCell important>{title}</BookTableCell>
            <BookTableCell>{author}</BookTableCell>
            <BookTableCell>{published}</BookTableCell>
            <BookTableCellLink href={link}>{title}</BookTableCellLink>
            <BookTableCell>{rating}</BookTableCell>
            <BookTableCell>{status}</BookTableCell>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
