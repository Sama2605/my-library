import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <div className="mb-3">
      <label className="block font-semibold tracking-wide mb-1 text-sm">{label}</label>
      <input ref={ref} className="block bg-gray-100 w-full p-2 outline-indigo-700 text-sm" {...props} />
    </div>
  )
})
