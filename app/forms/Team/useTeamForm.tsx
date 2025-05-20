import { getTeamById, MiniRoosU6Configuration, TeamConfiguration } from '~/data'
import { useForm } from 'react-hook-form'

export type NewTeam = {
  name: string
  players: string[]
  configuration: TeamConfiguration
}

export function useTeamForm({ teamId }: { teamId?: string }) {
  let defaultValues = {}
  if (teamId === undefined) {
    defaultValues = {
      defaultValues: {
        name: '',
        players: [],
        configuration: MiniRoosU6Configuration,
      },
    }
  } else {
    // Try to load the team
    const team = getTeamById(teamId)
    if (team) {
      const players = team.players.map((player) => player.name)
      defaultValues = {
        defaultValues: {
          name: team.name,
          players,
          configuration: team.configuration,
        },
      }
    } else {
      defaultValues = {
        defaultValues: {
          name: '',
          players: [],
          configuration: MiniRoosU6Configuration,
        },
      }
    }
  }
  return useForm<NewTeam>(defaultValues)
}
