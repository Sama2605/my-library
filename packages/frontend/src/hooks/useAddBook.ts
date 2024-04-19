import { useMutation } from '@tanstack/react-query'
import { BookFormValues } from 'types'

export function useAddBook() {
  const { mutate } = useMutation({
    mutationFn: (book: BookFormValues) => addBook(book),
  })

  return mutate
}

function addBook(book: BookFormValues) {
  return fetch('http://localhost:4422/book', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
