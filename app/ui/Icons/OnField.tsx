import { TbPlayFootball } from 'react-icons/tb'

export function OnField({ size, className }: { size?: string; className?: string }) {
  return (
    <div className="relative inline-block items-center">
      <TbPlayFootball size={size ?? '24'} className={className ?? ''} />
    </div>
  )
}
