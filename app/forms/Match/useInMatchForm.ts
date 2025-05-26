import { useForm } from 'react-hook-form'
import { createMatch, loadInMatchDetails, loadMatchSummary, loadTeam, Match } from 'app/data'

export type InMatchForm = Match & {
  deltaTime: number
}

export function useInMatchForm({ matchId }: { matchId: string }) {
  // Load the match details from the data store
  const match = loadInMatchDetails(matchId)
  let defaultValues = {}

  if (match) {
    // If the match exists, return the form with the default values
    defaultValues = { defaultValues: { ...match, deltaTime: 0 } }
  } else {
    // If the match does not exist, create it
    const matchSummary = loadMatchSummary(matchId)

    if (matchSummary) {
      const team = loadTeam(matchSummary.teamId)
      if (team) {
        const newMatch = createMatch(matchSummary, team)
        defaultValues = { defaultValues: { ...newMatch, deltaTime: 0 } }
      }
    }
    // If the match summary or team is not found, we return an empty form
  }

  return useForm<InMatchForm>(defaultValues)
}
