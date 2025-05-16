import { useCreateTeamForm } from './useCreateTeamForm'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import { NewTeamName } from './NewTeamName'
import { NewTeamRoster } from './NewTeamRoster'
import { addNewTeam, createTeam, MiniRoosU6Configuration, OpenConfiguration } from '~/data'
import { NewTeam } from './useCreateTeamForm'
import NewTeamConfiguration from './NewTeamConfiguration'
import { useEffect, useState } from 'react'
import { joinClsx } from '~/lib/utils'
import { useNavigate } from 'react-router'

export function CreateTeamForm() {
  const formProps = useCreateTeamForm()
  const [teamSize, setTeamSize] = useState<number>(1)
  const [readyToSubmit, setReadyForSubmit] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = formProps

  const config = watch('configuration', MiniRoosU6Configuration)
  const players = watch('players', [''])
  const teamName = watch('name', '')

  useEffect(() => {
    if (config) {
      const numPlayers = config?.playersOnField ?? 0
      const numReserves = config?.maximumReserves ?? 0
      setTeamSize((prev) => numPlayers + numReserves)
    }
  }, [config])

  useEffect(() => {
    if (!errors.name && !errors.players && !errors.configuration) {
      if (teamName && players.length > 0 && config !== undefined) {
        const numPlayersValid = players.filter((player) => player !== '').length
        setReadyForSubmit(numPlayersValid >= config.playersOnField)
        return
      }
    }
    setReadyForSubmit(false)
  }, [config, players, teamName])

  const onSubmit: SubmitHandler<NewTeam> = (data) => {
    console.log(!errors.name && !errors.players && !errors.configuration && readyToSubmit)
    if (!errors.name && !errors.players && !errors.configuration && readyToSubmit) {
      const newTeam = createTeam(
        data.name,
        data.players.filter((val) => val !== ''),
        data.configuration,
      )
      console.log('New team created:', newTeam)
      addNewTeam(newTeam)
      navigate('..')
    }
  }

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NewTeamName />
        <NewTeamConfiguration />
        <NewTeamRoster teamSize={teamSize} />
        <div
          className={joinClsx(
            'w-full flex flex-col rounded-lg p-4 text-brand-base1-10 font-bold',
            readyToSubmit ? 'bg-brand-accent1' : 'bg-brand-brown',
          )}
        >
          <button type="submit">Create Team</button>
        </div>
      </form>
    </FormProvider>
  )
}
