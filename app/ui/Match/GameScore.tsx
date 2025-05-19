import { useFormContext } from 'react-hook-form'
import { InMatchForm } from 'app/forms/Match'
import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'

export type GameScoreProps = {
  teamName: string
  opponentName: string
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

  const opponentShortName =
    opponentName.length > 10 ? `${opponentName.substring(0, 7)}...` : opponentName

  return (
    <div className="justify-center items-center relative pb-4">
      <h1 className="font-bold p-2">Score</h1>
      <div className="rounded-2xl grid grid-cols-7 items-center justify-items-center">
        <div className="col-span-3 font-bold text-2xl text-center">{teamName}</div>
        <div className="col-span-1"></div>
        <div className="col-span-3 font-bold text-2xl text-center">{opponentShortName}</div>
        <div className="col-span-7 h-4" />
        <div className="col-span-1 align-middle inline-block pt-2">
          <button type="button" onClick={incTeamScore}>
            <FaPlusCircle size={24} />
          </button>
        </div>
        <div className="col-span-1 font-bold text-2xl align-middle inline-block">
          {teamScore ?? 0}
        </div>
        <div className="col-span-1 align-middle inline-block pt-2">
          <button type="button" className="w-full h-full" onClick={decTeamScore}>
            <FaMinusCircle size={24} />
          </button>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1 pt-2">
          <button type="button" onClick={decOpponentScore}>
            <FaMinusCircle size={24} />
          </button>
        </div>
        <div className="col-span-1 font-bold text-2xl">{opponentScore ?? 0}</div>
        <div className="col-span-1 pt-2">
          <button type="button" onClick={incOpponentScore}>
            <FaPlusCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
