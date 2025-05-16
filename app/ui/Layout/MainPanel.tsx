import { ReactNode } from 'react'
import { joinClsx } from '~/lib/utils'

export type MainPanelProps = {
  children: ReactNode
  className?: string
}
export function MainPanel({ children, className }: MainPanelProps) {
  return <div className={joinClsx('items-center p-2', className ?? '')}>{children}</div>
}
