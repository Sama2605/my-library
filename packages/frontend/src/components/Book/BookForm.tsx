import { Input, Select } from 'components/common'
import { BookFormValues } from 'types'
import { useForm } from 'react-hook-form'
import { MouseEvent } from 'react'

interface Props {
  setShowForm: (value: boolean) => void
}

export function BookForm({ setShowForm }: Props) {
  const { register, handleSubmit, reset } = useForm<BookFormValues>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
    setShowForm(false)
  })

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowForm(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-4">
        <Input {...register('title')} label="Title" type="text" placeholder="To kill a mockingbird" />
        <Input {...register('author')} label="Author" type="text" placeholder="Harper Lee" />
      </div>

      <div className="flex gap-4">
        <Input {...register('published')} label="Published" type="number" placeholder="1960" />
        <Input {...register('rating')} label="Rating" type="number" placeholder="8.1" />
      </div>

      <Input
        {...register('link')}
        label="Link"
        type="text"
        placeholder="https://lubimyczytac.pl/ksiazka/270109/zabic-drozd"
      />

      <Select
        {...register('status')}
        label="Status"
        data={[
          { label: 'Available', value: 'available' },
          { label: 'Borrowed', value: 'borrowed' },
          { label: 'Lost', value: 'lost' },
        ]}
      />

      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-indigo-700 hover:bg-indigo-800 transition text-white rounded p-2 mt-3">
          Submit
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-600 transition text-white rounded p-2 mt-3"
          onClick={(e) => onClose(e)}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
