import { ReactNode } from 'react'

export function Button({
  children,
  onClick,
  className,
  type,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick ?? (() => {})}
      className={
        className ??
        'bg-brand-base2-100 text-brand-base1-10 rounded-2xl p-2 font-bold justify-center items-center'
      }
    >
      {children}
    </button>
  )
}
