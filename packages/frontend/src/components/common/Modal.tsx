import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './Icon'

interface Props {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export function Modal({ children, isOpen, setIsOpen }: Props) {
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="absolute top-0 h-full w-full flex items-center justify-center ">
            <div className="relative bg-white z-10 w-[30rem] p-8 rounded">
              <CloseButton onClose={() => setIsOpen(false)} />
              {children}
            </div>
            <div className="absolute h-full w-full bg-black opacity-60" />
          </div>,
          document.body,
        )}
    </>
  )
}

interface CloseButtonProps {
  onClose: () => void
}

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button className="absolute top-4 right-3" onClick={onClose}>
      <CloseIcon className="text-gray-400 hover:text-gray-600 transition" />
    </button>
  )
}
