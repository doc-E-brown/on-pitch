import { ReactNode } from 'react'

export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col pt-4">{children}</div>
}
