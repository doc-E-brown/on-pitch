import { PlayerState, Player } from '~/data'
import { GoalKeeper, OnField as OnFieldIcon, Reserve } from '../Icons'
import { PlayerStateCard } from './PlayerStateCard'
import { PlayerStateSection } from './PlayerStateSection'

export type KeeperComponentProps = {
  playerStates: PlayerState[]
  onFieldAction: (name: Player) => void
  onReserveAction: (name: Player) => void
}

export function Keeper({ playerStates, onReserveAction, onFieldAction }: KeeperComponentProps) {
  return (
    <PlayerStateSection
      title="Keeper"
      icon={<GoalKeeper className="text-brand-base1-10" size={'18'} />}
    >
      {playerStates
        .filter((state) => state.status === 'isKeeper')
        .map((state) => {
          return (
            <PlayerStateCard
              playerState={state}
              key={state.player.name}
              optionAComponent={<OnFieldIcon />}
              optionAEnabled={true}
              onOptionAClick={() => onFieldAction(state.player)}
              optionBComponent={<Reserve subCount={state.timesAsSub} />}
              optionBEnabled={true}
              onOptionBClick={() => onReserveAction(state.player)}
              optionCComponent={<GoalKeeper />}
              optionCEnabled={false}
            />
          )
        })}
    </PlayerStateSection>
  )
}
