import { FormProvider, SubmitHandler } from 'react-hook-form'
import { useTeamForm } from './useTeamForm'
import { TeamName } from './TeamName'
import { TeamRoster } from './TeamRoster'
import { addNewTeam, createTeam, MiniRoosU6Configuration, updateTeam } from '~/data'
import { NewTeam } from './useTeamForm'
import TeamConfiguration from './TeamConfiguration'
import { useEffect, useState } from 'react'
import { joinClsx } from '~/lib/utils'
import { useNavigate } from 'react-router'

export function TeamForm({ teamId }: { teamId?: string }) {
  const formProps = useTeamForm({ teamId })
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
        const numPlayersValid = players.filter((player: string) => player !== '').length
        setReadyForSubmit(numPlayersValid >= config.playersOnField)
        return
      }
    }
    setReadyForSubmit(false)
  }, [config, players, teamName])

  const onSubmit: SubmitHandler<NewTeam> = (data) => {
    if (!errors.name && !errors.players && !errors.configuration && readyToSubmit) {
      const players = data.players.filter((val) => val !== '')
      if (!teamId) {
        const newTeam = createTeam(data.name, players, data.configuration)
        addNewTeam(newTeam)
      } else {
        updateTeam(teamId, data.name, players, data.configuration)
      }

      navigate('..')
    }
  }

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TeamName editMode={teamId !== undefined} />
        <TeamConfiguration defaultValue={teamId !== undefined ? config.id : undefined} />
        <TeamRoster teamSize={teamSize} />
        <div
          className={joinClsx(
            'w-full flex flex-col rounded-lg p-4 text-brand-base1-10 font-bold',
            readyToSubmit ? 'bg-brand-accent1' : 'bg-brand-brown',
          )}
        >
          <button type="submit">{teamId !== undefined ? 'Save' : 'Create'} Team</button>
        </div>
      </form>
    </FormProvider>
  )
}
