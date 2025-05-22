import { RiSwapFill } from 'react-icons/ri'

export function Reserve({
  subCount,
  size,
  className,
}: {
  subCount?: number
  size?: string | number
  className?: string
}) {
  const haveSubCount = subCount !== undefined
  return (
    <div className="relative inline-block items-center">
      <div>
        <RiSwapFill size={size ?? '24'} className={className ?? ''} />
      </div>
      {haveSubCount && (
        <div className="absolute bottom-2 left-2 pl-2 text-xlnetli text-brand-accent1 font-extrabold">
          {subCount}
        </div>
      )}
    </div>
  )
}
