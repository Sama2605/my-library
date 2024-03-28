import { ReactNode, SelectHTMLAttributes } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  data: { label: ReactNode; value: string | number }[]
  label: ReactNode
}

export function Select({ data, label, ...props }: Props) {
  return (
    <div>
      <label className="block font-semibold tracking-wide mb-2">{label}</label>
      <select className="block bg-gray-100 w-full p-2 outline-indigo-700" {...props}>
        {data.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  )
}
