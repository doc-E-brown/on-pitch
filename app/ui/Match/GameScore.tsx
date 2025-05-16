import { useFormContext } from 'react-hook-form'
import { InMatchForm } from 'app/forms/Match'
import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'

export type GameScoreProps = {
  teamName: string
  opponentName: string
}

function ScoreElement({ score, inc, dec }: { score: number; inc: () => void; dec: () => void }) {
  return (
    <div>
      <div className="col-span-1">
        <button type="button" onClick={inc}>
          <FaPlusCircle />
        </button>
      </div>
      <div className="col-span-1">{score}</div>
      <div className="col-span-1">
        <button type="button" onClick={dec}>
          <FaMinusCircle />
        </button>
      </div>
    </div>
  )
}

export function GameScore({ teamName, opponentName }: GameScoreProps) {
  const { watch, setValue } = useFormContext<InMatchForm>()

  const teamScore = watch('teamScore')
  const opponentScore = watch('opponentScore')

  const incTeamScore = () => {
    setValue('teamScore', (teamScore ?? 0) + 1)
  }
  const decTeamScore = () => {
    if (teamScore === 0) return
    setValue('teamScore', (teamScore ?? 0) - 1)
  }

  const incOpponentScore = () => {
    setValue('opponentScore', (opponentScore ?? 0) + 1)
  }
  const decOpponentScore = () => {
    if (opponentScore === 0) return
    setValue('opponentScore', (opponentScore ?? 0) - 1)
  }

  return (
    <div className="justify-center items-center relative pb-4">
      <h1 className="font-bold p-2">Score</h1>
      <div className="rounded-2xl grid grid-cols-7 items-center justify-items-center">
        <div className="col-span-3 font-bold text-2xl pb-2">{teamName}</div>
        <div className="col-span-1"></div>
        <div className="col-span-3 font-bold text-2xl pb-2">{opponentName}</div>
        <div className="col-span-1">
          <button type="button" onClick={incTeamScore}>
            <FaPlusCircle size={20} />
          </button>
        </div>
        <div className="col-span-1 font-bold text-2xl">{teamScore ?? 0}</div>
        <div className="col-span-1">
          <button type="button" className="w-full h-full" onClick={decTeamScore}>
            <FaMinusCircle size={20} />
          </button>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1">
          <button type="button" onClick={decOpponentScore}>
            <FaMinusCircle size={20} />
          </button>
        </div>
        <div className="col-span-1 font-bold text-2xl">{opponentScore ?? 0}</div>
        <div className="col-span-1">
          <button type="button" onClick={incOpponentScore}>
            <FaPlusCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
