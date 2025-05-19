import { ReactNode } from 'react'

export type WelcomePanelProps = {
  icon: ReactNode
  title: string
  children: ReactNode
}

export function WelcomePanel({ icon, title, children }: WelcomePanelProps) {
  return (
    <div className={'w-full p-4 rounded-lg bg-brand-base2-25'}>
      <div className="w-full flex-col font-bold inline-block pb-2 justify-items-center items-center text-center">
        {icon}
        <span className="text-brand-base1-10 inline-block align-middle text-2xl pl-2 justify-items-center">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
