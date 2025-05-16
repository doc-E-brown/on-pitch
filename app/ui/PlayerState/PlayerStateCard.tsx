import { ReactNode } from 'react'
import { PlayerState } from '../../data'
import { timeToString } from '../../lib/utils'

export type PlayerStateCardProps = {
  playerState: PlayerState
  optionAComponent?: ReactNode
  onOptionAClick?: () => void
  optionAEnabled?: boolean
  optionBComponent?: ReactNode
  onOptionBClick?: () => void
  optionBEnabled?: boolean
  optionCComponent?: ReactNode
  onOptionCClick?: () => void
  optionCEnabled?: boolean
}

export function PlayerStateCard({
  playerState,
  optionAComponent,
  optionAEnabled,
  onOptionAClick,
  optionBComponent,
  optionBEnabled,
  onOptionBClick,
  optionCComponent,
  optionCEnabled,
  onOptionCClick,
}: PlayerStateCardProps) {
  return (
    <div className="w-full pt-1 pb-1">
      <div className="flex flex-col items-left justify-center w-full p-4 border rounded-lg bg-brand-base2-100">
        <div className="grid grid-cols-8">
          <div
            className="font-bold col-span-3 text-brand-base1-10 text-lg"
            data-testid="player-card-name"
          >
            {playerState.player.name}
          </div>
          <div className="col-span-2 text-brand-base1-10 gap-4 text-l items-center">
            {timeToString(playerState.timePlayed)}
          </div>
          <div className="col-span-1 text-brand-base1-10 gap-4">
            {optionAEnabled && (
              <button type="button" onClick={onOptionAClick} disabled={!optionAEnabled}>
                {optionAComponent}
              </button>
            )}
          </div>
          <div className="col-span-1 text-brand-base1-10 gap-4">
            {optionBEnabled && (
              <button type="button" onClick={onOptionBClick} disabled={!optionBEnabled}>
                {optionBComponent}
              </button>
            )}
          </div>
          <div className="col-span-1 text-brand-base1-10 gap-4">
            {optionCEnabled && (
              <button type="button" onClick={onOptionCClick} disabled={!optionCEnabled}>
                {optionCComponent}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
