import { Book } from 'types'

interface Props {
  status: Book['status']
}

export function BookAvailable({ status }: Props) {
  const statusBg = {
    available: 'bg-gray-200 text-gray-800',
    lost: 'text-rose-800 bg-rose-300',
    borrowed: 'text-gray-900',
  }[status]

  return <div className={`p-2 ${statusBg} w-24 text-xs text-gray-900 text-center rounded`}>{status}</div>
}
