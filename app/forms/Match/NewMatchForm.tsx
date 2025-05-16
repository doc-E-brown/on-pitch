import { FormProvider, SubmitHandler } from 'react-hook-form'
import { NewMatch, useNewMatchForm } from './useNewMatchForm'
import { SelectTeam } from './SelectTeam'
import { TextInput } from 'app/ui/Input/TextInput'
import { addNewMatch } from 'app/data'
import { joinClsx } from '~/lib/utils'
import { useEffect } from 'react'
import { HiUserGroup } from 'react-icons/hi'
import { GiSoccerField } from 'react-icons/gi'
import { Button } from '~/ui/Input'

export type StartMatchFormProps = {
  onSubmit: (teamId: string) => void
  onSubmitText: string
}

export function NewMatchForm({ onSubmit, onSubmitText }: StartMatchFormProps) {
  const formProps = useNewMatchForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setError,
  } = formProps

  const opponentName = watch('opponentName', '')

  const doSubmit: SubmitHandler<NewMatch> = (data) => {
    if (!errors.teamId && !errors.opponentName) {
      const { teamId, opponentName } = data
      const newMatchId = addNewMatch(teamId, opponentName)
      onSubmit(newMatchId)
    }
  }

  useEffect(() => {
    if (opponentName.length > 0 && opponentName !== '') {
      formProps.clearErrors('opponentName')
    } else {
      setError('opponentName', {
        type: 'manual',
        message: 'Opponent name is required',
      })
    }
  }, [opponentName])

  return (
    <FormProvider {...formProps}>
      <div className={'w-full p-4 rounded-lg bg-brand-base2-25 text-brand-base1-10'}>
        <div className="w-full flex-col font-bold inline-block pb-2 justify-items-center items-center text-center">
          <GiSoccerField className="text-brand-base1-10 align-middle inline-block" size={32} />
          <span className="text-brand-base1-10 inline-block align-middle text-2xl pl-2 justify-items-center">
            Start New Match
          </span>
        </div>
        <form onSubmit={handleSubmit(doSubmit)}>
          <div className="grid flex-col grid-cols-2 p-2">
            <SelectTeam />
          </div>
          <div className="col-span-1 inline-block align-middle">
            <span className="text-lg font-bold inline-block align-middle pr-10">Opponent</span>
          </div>
          <div className="col-span-1 inline-block align-middle justify-items-end items-end pl-4">
            <TextInput
              {...register('opponentName', { required: true, maxLength: 15 })}
              className={joinClsx(
                'bg-brand-base1-10 text-brand-base2-100 pl-4',
                errors.opponentName ? 'border-brand-accent1 text-brand-accent1' : '',
              )}
            />
            {errors.opponentName && (
              <div className="w-full text-brand-accent1 text-lg font-bold">
                {errors.opponentName.message}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col p-4">
            <Button
              onClick={() => {}}
              className="bg-brand-accent2 font-extrabold text-lg rounded-lg h-12"
            >
              {onSubmitText}
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  )
}
