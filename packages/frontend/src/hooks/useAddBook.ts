import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BookFormValues } from 'types'

export function useAddBook() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (book: BookFormValues) => addBook(book),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getBooks'] }),
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
