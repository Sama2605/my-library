type FontWeight = 'normal' | 'bold'

interface IconProps {
  color?: string
  size?: number
  weight?: FontWeight
  className?: string
}

interface IconBaseProps extends IconProps {
  children: string
}

export function createMaterialIcon(name: string) {
  return function Component({ size, className }: IconProps) {
    return (
      <MaterialIcon className={className} size={size}>
        {name}
      </MaterialIcon>
    )
  }
}

function MaterialIcon({ children, size = 24, className = '' }: IconBaseProps) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{
        fontSize: `${size}px`,
      }}
    >
      {children}
    </span>
  )
}
