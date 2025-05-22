import { FormProvider, SubmitHandler } from 'react-hook-form'
import { NewMatch, useNewMatchForm } from './useNewMatchForm'
import { SelectTeam } from './SelectTeam'
import { TextInput } from 'app/ui/Input/TextInput'
import { addNewMatch } from 'app/data'
import { joinClsx } from '~/lib/utils'
import { useEffect, useState } from 'react'
import { GiSoccerField } from 'react-icons/gi'
import { Button } from '~/ui/Input'

export type StartMatchFormProps = {
  onSubmit: (teamId: string) => void
  onSubmitText: string
}

export function NewMatchForm({ onSubmit, onSubmitText }: StartMatchFormProps) {
  const [readyToStart, setReadyToStart] = useState<boolean>(false)
  const formProps = useNewMatchForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = formProps

  const opponentName = watch('opponentName', '')
  const teamId = watch('teamId', '')

  const doSubmit: SubmitHandler<NewMatch> = (data) => {
    if (data.opponentName.length === 0 || data.opponentName === '') {
      return
    }
    if (!errors.teamId && !errors.opponentName) {
      const { teamId, opponentName } = data
      const newMatchId = addNewMatch(teamId, opponentName)
      onSubmit(newMatchId)
    }
  }

  useEffect(() => {
    if (opponentName.length > 0) {
      formProps.clearErrors('opponentName')
    }
  }, [opponentName, formProps])

  useEffect(() => {
    setReadyToStart(opponentName !== '' && teamId !== '')
  }, [opponentName, teamId])

  return (
    <FormProvider {...formProps}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(doSubmit)}
      >
        <div
          className={'w-full pt-4 pl-4 pr-4 pb-8 rounded-lg bg-brand-base2-25 text-brand-base1-10'}
        >
          <div className="w-full flex-col font-bold inline-block pb-2 justify-items-center items-center text-center">
            <GiSoccerField className="text-brand-base1-10 align-middle inline-block" size={32} />
            <span className="text-brand-base1-10 inline-block align-middle text-2xl pl-2 justify-items-center">
              Start New Match
            </span>
          </div>

          <SelectTeam />
          <div className="inline-block align-middle">
            <span className="text-lg font-bold inline-block align-middle pr-8">Opponent</span>
          </div>
          <div className="inline-block align-middle pl-4">
            <TextInput
              {...register('opponentName', {
                required: {
                  value: true,
                  message: 'Opponent name is required',
                },
              })}
              className={joinClsx(
                'bg-brand-base1-10 text-brand-base2-100 pl-4',
                errors.opponentName ? 'border-brand-accent1 text-brand-accent1' : '',
              )}
            />
          </div>
          {errors.opponentName && (
            <div className="w-full flex-col">
              <div className="text-brand-accent1 text-lg font-bold text-right">
                {errors.opponentName?.message}
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col p-4">
          <Button
            type="submit"
            className={joinClsx(
              'text-brand-base1-10 font-extrabold text-lg rounded-lg h-12',
              readyToStart ? 'bg-brand-base2-100' : 'bg-brand-base2-10',
            )}
          >
            {onSubmitText}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
