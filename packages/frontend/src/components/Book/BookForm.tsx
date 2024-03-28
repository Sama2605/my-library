import { Input, Modal, Select } from 'components/common'
import { AddIcon, BookIcon } from 'components/common/Icon'
import { useState } from 'react'

export function BookForm() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="bg-indigo-700 hover:bg-indigo-800 transition text-white flex items-center p-2 rounded my-3"
      >
        <AddIcon />
        Add book
      </button>

      <Modal isOpen={showForm} setIsOpen={setShowForm}>
        <BookIcon size={64} className="text-indigo-700" />
        <h3 className="text-lg font-semibold mb-5">Add new book</h3>

        <div className="flex gap-4">
          <Input label="Title" type="text" placeholder="To kill a mockingbird" />
          <Input label="Author" type="text" placeholder="Harper Lee" />
        </div>

        <div className="flex gap-4">
          <Input label="Published" type="number" placeholder="1960" />
          <Input label="Rating" type="number" placeholder="8.1" />
        </div>

        <Input label="Link" type="text" placeholder="https://lubimyczytac.pl/ksiazka/270109/zabic-drozd" />

        <Select
          label="Status"
          data={[
            { label: 'Available', value: 'available' },
            { label: 'Borrowed', value: 'borrowed' },
            { label: 'Lost', value: 'lost' },
          ]}
        />

        <div className="flex gap-2 mt-4">
          <button className="bg-indigo-700 hover:bg-indigo-800 transition text-white rounded p-2 mt-3">Submit</button>
          <button className="bg-gray-400 hover:bg-gray-600 transition text-white rounded p-2 mt-3">Cancel</button>
        </div>
      </Modal>
    </div>
  )
}
