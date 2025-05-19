import { useFormContext } from 'react-hook-form'
import { NewTeam } from './useTeamForm'
import { TextInput } from '~/ui/Input/TextInput'
import { Button } from '~/ui/Input/Button'
import { joinClsx } from '~/lib/utils'
import { FaPlusCircle } from 'react-icons/fa'
import { useEffect } from 'react'

export function TeamRoster({ teamSize }: { teamSize: number }) {
  const {
    setError,
    clearErrors,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext<NewTeam>()

  const roster = watch('players', [''])
  const teamConfiguration = watch('configuration')

  useEffect(() => {
    if (roster.length < teamSize) {
      setValue('players', [...roster, ...Array(teamSize - roster.length).fill('')])
    }
  }, [teamSize])

  const updateMemberName = (index: number, value: string) => {
    if (roster.includes(value) && value !== '') {
      setError(`players.${index}`, { type: 'manual', message: 'Player name already exists' })
    } else {
      clearErrors(`players.${index}`)
    }
    const updatedRoster = [...roster]
    updatedRoster[index] = value
    setValue('players', updatedRoster)
  }

  const addTeamMember = () => {
    const updatedRoster = [...roster, '']
    setValue('players', updatedRoster)
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
