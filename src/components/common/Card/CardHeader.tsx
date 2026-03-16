type CardHeaderProps = {
  children: React.ReactNode
}

export function CardHeader({ children }: CardHeaderProps) {
  return (
    <div className="mb-2">
      {children}
    </div>
  )
}