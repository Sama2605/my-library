import { BookFormModal, BookTable } from 'components/Book'
import { useBooks } from 'hooks/useBooks'

export function Home() {
  const { books, isLoading } = useBooks()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="p-5">
      <BookFormModal />
      <BookTable data={books} />
    </div>
  )
}
