import { isTeamNameAvailable } from 'app/data'
import { useFormContext } from 'react-hook-form'
import { NewTeam } from './useCreateTeamForm'
import { useEffect } from 'react'
import { TextInput } from 'app/ui/Input/TextInput'
import { joinClsx } from '~/lib/utils'

export function NewTeamName() {
  const {
    register,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext<NewTeam>()

  const teamName = watch('name')

  useEffect(() => {
    if (!isTeamNameAvailable(teamName)) {
      setError('name', { type: 'manual', message: 'Team name already exists' })
    } else {
      clearErrors('name')
    }
  }, [teamName])

  return (
    <div className="justify-center relative pb-4">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <span className={joinClsx('font-bold text-lg', errors.name ? 'text-brand-accent1' : '')}>
            Team Name
          </span>
        </div>
        <div className="col-span-1">
          <TextInput
            className={joinClsx(
              'w-full',
              errors.name ? 'border-brand-accent1 text-brand-accent1' : '',
            )}
            maxLength={15}
            {...register('name', {
              required: true,
              validate: {
                isTeamNameAvailable: (value) =>
                  isTeamNameAvailable(value) || 'Team name already exists',
              },
            })}
          />
        </div>
      </div>
      {errors.name && (
        <div className="w-full text-right text-brand-accent1 text-lg font-bold">
          {errors.name.message}
        </div>
      )}
    </div>
  )
}
