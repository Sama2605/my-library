import { useQuery } from '@tanstack/react-query'
import { Book } from 'types'

export function useBooks() {
  const { data = [], isLoading } = useQuery({ queryKey: ['getBooks'], queryFn: getBooks })

  return { books: data, isLoading }
}

async function getBooks(): Promise<Book[]> {
  const response = await fetch('http://localhost:4422/books')

  return response.json()
}
