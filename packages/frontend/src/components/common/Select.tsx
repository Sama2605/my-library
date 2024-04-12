import { ReactNode, SelectHTMLAttributes, forwardRef } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  data: { label: ReactNode; value: string | number }[]
  label: ReactNode
}

export const Select = forwardRef<HTMLSelectElement, Props>(({ data, label, ...props }, ref) => {
  return (
    <div>
      <label className="block font-semibold tracking-wide mb-2">{label}</label>
      <select ref={ref} className="block bg-gray-100 w-full p-2 outline-indigo-700" {...props}>
        {data.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
})
