import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InMatchForm } from '~/forms/Match'
import { timeToString } from '~/lib/utils'
import { useTick } from '~/ui/hooks'
import { HiMiniPlayPause } from 'react-icons/hi2'

export type GameClockProps = {
  initialClock: number
  tickPeriod?: number
}

export function GameClock({ initialClock, tickPeriod }: GameClockProps) {
  const { watch, setValue } = useFormContext<InMatchForm>()
  const [gameClock, setGameClock] = useState(initialClock ?? 0)

  const isGamePlaying = watch('isGamePlaying')

  const startStop = () => {
    if (isGamePlaying === 'inProgress') {
      setValue('isGamePlaying', 'isPaused')
    } else {
      setValue('isGamePlaying', 'inProgress')
    }
  }

  const onTick = (deltaTime: number) => {
    if (isGamePlaying != 'inProgress') return
    setGameClock((prevClock) => prevClock + deltaTime)
    setValue('deltaTime', deltaTime)
    setValue('gameClock', gameClock)
  }

  useTick(tickPeriod || 1000, onTick) // 1 second

  return (
    <div className="inline-block items-center font-extrabold text-2xl text-brand-base1-10">
      <div className="flex justify-items-center">
        <span>
          <button type="button" onClick={startStop}>
            <HiMiniPlayPause color="brand-brand-10 h-full" size={32} />
          </button>
        </span>
        <span className="pl-4">{timeToString(gameClock)}</span>
      </div>
    </div>
  )
}
