import { Info } from './+types/MatchRoute'
import { loadMatchSummary, loadTeam } from 'app/data'
import { MatchForm } from 'app/forms/Match'

export default function MatchRoute({ params: { matchId } }: Info) {
  const matchSummary = loadMatchSummary(matchId)

  if (!matchSummary) {
    return <div>Match not found</div>
  }

  const team = loadTeam(matchSummary.teamId)

  if (!team) {
    return <div>Team not found</div>
  }

  let matchTitle = ''
  if (matchSummary.opponentName) {
    matchTitle = `${team.name} vs ${matchSummary.opponentName}`
  } else {
    matchTitle = `${team.name} ${new Date(matchSummary.date).toDateString()}`
  }

  return (
    <div className="overflow-x-hidden h-full overflow-y-scroll">
      <MatchForm matchId={matchId} />
    </div>
  )
}
