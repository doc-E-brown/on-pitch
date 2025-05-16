import { Player, PlayerState } from '~/data'
import { PlayerStateCard } from './PlayerStateCard'
import { GoalKeeper, OnField as OnFieldIcon, Reserve as ReserveIcon } from '../Icons'
import { PlayerStateSection } from './PlayerStateSection'

export type SortMode = 'timePlayed' | 'lastSub' | 'numberOfSubs'

export type ReserveComponentProps = {
  playerStates: PlayerState[]
  onKeeperAction: (name: Player) => void
  onFieldAction: (name: Player) => void
  playWithKeeper: boolean
  maxReserves: number
  sortMode?: SortMode
}

export function Reserve({
  playerStates,
  onKeeperAction,
  onFieldAction,
  playWithKeeper,
  maxReserves,
  sortMode = 'lastSub',
}: ReserveComponentProps) {
  let sortFn = (a: PlayerState, b: PlayerState) => a.subOffTime - b.subOffTime
  switch (sortMode) {
    case 'timePlayed':
      sortFn = (a: PlayerState, b: PlayerState) => a.timePlayed - b.timePlayed
      break
    case 'numberOfSubs':
      sortFn = (a: PlayerState, b: PlayerState) => a.timesAsSub - b.timesAsSub
      break
    case 'lastSub':
    default:
      break
  }

  const reserves = playerStates.filter((state) => state.status === 'isReserve')

  const titleText = `Reserves (${reserves.length}/${maxReserves})`

  return (
    <PlayerStateSection
      title={titleText}
      icon={<ReserveIcon className="text-brand-base1-10" size={'20'} />}
    >
      {reserves.sort(sortFn).map((state) => {
        return (
          <PlayerStateCard
            playerState={state}
            key={state.player.name}
            optionAComponent={<OnFieldIcon />}
            optionAEnabled={true}
            onOptionAClick={() => onFieldAction(state.player)}
            optionBComponent={<ReserveIcon subCount={state.timesAsSub} />}
            optionBEnabled={true}
            optionCComponent={<GoalKeeper />}
            onOptionCClick={() => onKeeperAction(state.player)}
            optionCEnabled={playWithKeeper}
          />
        )
      })}
    </PlayerStateSection>
  )
}
