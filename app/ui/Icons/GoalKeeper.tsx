import { GiGoalKeeper } from 'react-icons/gi'

export function GoalKeeper({ size, className }: { size?: string; className?: string }) {
  return (
    <div className="relative inline-block items-center">
      <GiGoalKeeper size={size ?? '24'} className={className ?? ''} />
    </div>
  )
}
