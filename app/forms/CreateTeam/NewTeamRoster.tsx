import { useFormContext } from 'react-hook-form'
import { NewTeam } from './useCreateTeamForm'
import { useEffect, useState } from 'react'
import { TextInput } from '~/ui/Input/TextInput'
import { Button } from '~/ui/Input/Button'
import { joinClsx } from '~/lib/utils'
import { FaPlusCircle } from 'react-icons/fa'

export function NewTeamRoster({ teamSize }: { teamSize: number }) {
  const {
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useFormContext<NewTeam>()

  const [roster, setRoster] = useState<Array<string>>([''])

  useEffect(() => {
    setRoster((prev) => Array(teamSize).fill(''))
  }, [teamSize])

  useEffect(() => {
    setValue('players', roster)
  }, [roster])

  const updateMemberName = (index: number, value: string) => {
    if (roster.includes(value) && value !== '') {
      setError(`players.${index}`, { type: 'manual', message: 'Player name already exists' })
    } else {
      clearErrors(`players.${index}`)
    }
    const updatedRoster = [...roster]
    updatedRoster[index] = value
    setRoster(updatedRoster)
  }

  const addTeamMember = () => {
    setRoster((prev) => [...prev, ''])
  }

  return (
    <div className="justify-center items-center relative pb-4">
      <div className="pb-4">
        <span className="font-bold text-lg">Player Names</span>
      </div>
      {roster.map((member: string, index: number) => (
        <div key={index} className="pb-2">
          <TextInput
            className={joinClsx(
              'w-full',
              errors.players && errors.players[index]
                ? 'border-brand-accent1 text-brand-accent1'
                : '',
            )}
            value={member}
            onChange={(e) => {
              updateMemberName(index, e.target.value)
            }}
          />
          {errors.players && errors.players[index] && (
            <div className="w-full text-brand-accent1 text-lg font-bold">
              {errors.players[index].message}
            </div>
          )}
        </div>
      ))}
      <Button
        onClick={addTeamMember}
        className="w-full flex flex-col items-center justify-items-center text-center"
      >
        <FaPlusCircle size={20} />
      </Button>
    </div>
  )
}
