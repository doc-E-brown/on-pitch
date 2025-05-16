import { ReactNode } from 'react'

export function TitlePanel({ title }: { title: ReactNode }) {
  return (
    <div className="relative top-0 p-2 w-full bg-brand-base2-100 ">
      <h1 className="text-brand-base1-10 pl-2">{title}</h1>
    </div>
  )
}
