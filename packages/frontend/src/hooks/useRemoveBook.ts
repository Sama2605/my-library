import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useRemoveBook() {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (bookId: number) => removeBook(bookId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['getBooks'] }),
  })

  return mutate
}

function removeBook(bookId: number) {
  return fetch(`http://localhost:4422/book/${bookId}`, {
    method: 'DELETE',
  })
}
