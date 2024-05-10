import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Home } from 'pages'

const queryClient = new QueryClient()

queryClient.invalidateQueries({ queryKey: ['books'] })

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}
