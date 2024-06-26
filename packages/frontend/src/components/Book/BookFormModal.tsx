import { Modal } from 'components/common'
import { AddIcon, BookIcon } from 'components/common/Icon'
import { useState } from 'react'
import { BookForm } from './BookForm'

export function BookFormModal() {
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

        <BookForm setShowForm={setShowForm} />
      </Modal>
    </div>
  )
}
