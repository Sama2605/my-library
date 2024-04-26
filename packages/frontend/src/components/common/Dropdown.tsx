import { ReactNode, useRef, useState } from 'react'
import { TreeDotsIcon } from './Icon'

type DropdownItemData = { label: ReactNode; onClick: () => void }

interface DropdownProps {
  data: DropdownItemData[]
}

export function Dropdown({ data }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <TreeDotsIcon />
      </button>

      <ul
        ref={dropdownRef}
        className={`absolute bg-slate-50 border border-b-0 z-10 left-[-34px] ${!isOpen && 'hidden'}`}
      >
        {data.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

interface DropdownItemProps {
  item: DropdownItemData
}

function DropdownItem({ item }: DropdownItemProps) {
  const { label, onClick } = item

  return (
    <li className="text-sm px-4 py-2 border-b cursor-pointer hover:bg-slate-100" onClick={onClick}>
      {label}
    </li>
  )
}
