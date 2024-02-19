import { Book } from 'types'

interface Props {
  data: Book[]
}

export function BookTable({ data }: Props) {
  const headers = ['Id', 'Title', 'Author', 'Published']

  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr>
          {headers.map((name, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, title, author, published }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{published}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
