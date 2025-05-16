import { Player, PlayerState } from '~/data'
import { PlayerStateCard } from './PlayerStateCard'
import { GoalKeeper, Reserve, OnField as OnFieldIcon } from '../Icons'
import { PlayerStateSection } from './PlayerStateSection'

export type OnFieldComponentProps = {
  playerStates: PlayerState[]
  onKeeperAction: (name: Player) => void
  onReserveAction: (name: Player) => void
  playWithKeeper: boolean
  maxOnField: number
}

export function OnField({
  playerStates,
  onKeeperAction,
  onReserveAction,
  playWithKeeper,
  maxOnField,
}: OnFieldComponentProps) {
  const onField = playerStates.filter((state) => state.status === 'isOnField')
  const titleText = `On Field (${onField.length}/${maxOnField})`
  return (
    <PlayerStateSection
      title={titleText}
      icon={<OnFieldIcon className="stroke-brand-base1-10" size={'20'} />}
    >
      {onField
        .sort((a, b) => b.timePlayed - a.timePlayed)
        .map((state) => {
          return (
            <PlayerStateCard
              playerState={state}
              key={state.player.name}
              optionAComponent={<OnFieldIcon />}
              optionAEnabled={true}
              optionBComponent={<Reserve subCount={state.timesAsSub} />}
              optionBEnabled={true}
              onOptionBClick={() => onReserveAction(state.player)}
              optionCComponent={<GoalKeeper />}
              optionCEnabled={playWithKeeper}
              onOptionCClick={() => onKeeperAction(state.player)}
            />
          )
        })}
    </PlayerStateSection>
  )
}
