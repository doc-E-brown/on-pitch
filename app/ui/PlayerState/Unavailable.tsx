import { Player, PlayerState } from '~/data'
import { PlayerStateCard } from './PlayerStateCard'
import { GoalKeeper, OnField as OnFieldIcon, Reserve } from '../Icons'
import { PlayerStateSection } from './PlayerStateSection'

export type UnavailableComponentProps = {
  playerStates: PlayerState[]
  onFieldAction: (name: Player) => void
  onReserveAction: (name: Player) => void
  onKeeperAction: (name: Player) => void
  playWithKeeper: boolean
}

export function Unavailable({
  playerStates,
  onFieldAction,
  onReserveAction,
  onKeeperAction,
  playWithKeeper,
}: UnavailableComponentProps) {
  return (
    <PlayerStateSection title={'Unavailable'} icon={''}>
      {playerStates
        .filter((state) => state.status === 'isUnavailable')
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
              onOptionCClick={() => onKeeperAction(state.player)}
              optionCEnabled={playWithKeeper}
            />
          )
        })}
    </PlayerStateSection>
  )
}
