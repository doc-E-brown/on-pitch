import { ReactNode } from 'react'

export function Banner({ children }: { children: ReactNode }) {
  return <div className="relative size-16 p-4 w-full bg-brand-base2-100 ">{children}</div>
}
