import { ReactNode } from 'react'
import { GoalKeeper } from '~/ui/Icons'
import { joinClsx } from '~/lib/utils'

export type PlayerStateSectionProps = {
  title: ReactNode
  icon: ReactNode
  children: ReactNode
  className?: string
}

export function PlayerStateSection({ title, icon, children, className }: PlayerStateSectionProps) {
  return (
    <div className={joinClsx('w-full p-4 rounded-lg bg-brand-base2-25', className ?? '')}>
      <h2 className="relative inline-block items-left font-bold pb-2 justify-items-center items-center">
        {icon}
        <span className="pl-2 text-brand-base1-10">{title}</span>
      </h2>
      {children}
    </div>
  )
}
