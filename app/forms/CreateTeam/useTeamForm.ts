import { getTeamById, MiniRoosU6Configuration, TeamConfiguration } from '~/data'
import { useForm } from 'react-hook-form'

export type NewTeam = {
  name: string
  players: string[]
  configuration: TeamConfiguration
}

const defaultParams = () => {
  return useForm<NewTeam>({
    defaultValues: {
      name: '',
      players: [],
      configuration: MiniRoosU6Configuration,
    },
  })
}

export function useTeamForm({ teamId }: { teamId?: string }) {
  if (teamId === undefined) {
    return defaultParams()
  }

  // Try to load the team
  const team = getTeamById(teamId)
  if (!team) {
    return defaultParams()
  }

  const players = team.players.map((player) => player.name)

  return useForm<NewTeam>({
    defaultValues: {
      name: team.name,
      players,
      configuration: team.configuration,
    },
  })
}
