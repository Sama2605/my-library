import { BookTable } from 'components/BookTable/BookTable'
import { useBooks } from 'hooks/useBooks'

export function Home() {
  const { books, isLoading } = useBooks()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-5">
      <BookTable data={books} />
    </div>
  )
}
