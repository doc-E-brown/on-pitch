import { useCallback, useEffect } from 'react'
import { getListOfTeams } from '~/data'
import { useFormContext } from 'react-hook-form'
import { NewMatch } from './useNewMatchForm'

export function SelectTeam() {
  const formProps = useFormContext<NewMatch>()
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = formProps
  const listOfTeams = getListOfTeams()

  const isTeamIdValid = useCallback(
    (teamId: string) => {
      return listOfTeams.some((team) => {
        return teamId === team.id
      })
    },
    [listOfTeams],
  )

  const teamId = watch('teamId')

  useEffect(() => {
    if (teamId !== '' && !isTeamIdValid(teamId)) {
      setError('teamId', { type: 'manual', message: 'Please select a team' })
    } else {
      clearErrors('teamId')
    }
  }, [teamId, clearErrors, setError])

  return (
    <>
      <div className="pb-2">
        <span className="font-bold text-lg align-middl pr-8">Select Team</span>
        <span className="relative inline-block align-middle">
          <select
            className="w-full p-1 rounded-lg"
            {...register('teamId', {
              required: {
                value: true,
                message: 'Please select a team',
              },
              validate: {
                isValidTeam: (value) => isTeamIdValid(value) || 'Please select a team',
              },
            })}
            defaultValue={''}
          >
            <option id={''} value={''} />
            {listOfTeams.map((team) => {
              return (
                <option key={team.id} id={team.id} value={team.id}>
                  {team.name}
                </option>
              )
            })}
          </select>
        </span>
        {errors.teamId && (
          <div className="w-full text-brand-accent1 text-lg font-bold text-right">
            {errors.teamId.message}
          </div>
        )}
      </div>
    </>
  )
}
