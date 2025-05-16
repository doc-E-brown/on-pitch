import { MiniRoosU6Configuration, TeamConfiguration } from '~/data'
import { useForm } from 'react-hook-form'

export type NewTeam = {
  name: string
  players: string[]
  configuration: TeamConfiguration
}

export function useCreateTeamForm() {
  return useForm<NewTeam>({
    defaultValues: {
      name: '',
      players: [],
      configuration: MiniRoosU6Configuration,
    },
  })
}
