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
  return function Component({ color, size }: IconProps) {
    return (
      <MaterialIcon color={color} size={size}>
        {name}
      </MaterialIcon>
    )
  }
}

function MaterialIcon({ children }: IconBaseProps) {
  return <span className="material-symbols-rounded">{children}</span>
}
