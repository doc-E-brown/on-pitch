import { Team } from './team'
import { createMatchSummary, MatchSummary } from './match'
import { InMatchForm } from 'app/forms/Match'
import { TeamConfiguration } from './team'
import { createPlayer } from './player'

export function getListOfTeams(): Team[] {
  const allTeams = localStorage.getItem('teamsList')
  if (allTeams) {
    return JSON.parse(allTeams) as Team[]
  }
  return []
}

export function getTeamById(teamId: string): Team | null {
  const allTeams = getListOfTeams()
  const team = allTeams.find((team) => team.id === teamId)
  if (team) {
    return team
  }
  return null
}

export function setListOfTeams(teams: Team[]): void {
  localStorage.setItem('teamsList', JSON.stringify(teams))
}

export function isTeamNameAvailable(name: string) {
  const teams = getListOfTeams()
  return !teams.some((team) => team.name === name)
}

export function addNewTeam(team: Team): void {
  const allTeams = getListOfTeams()
  allTeams.push(team)
  setListOfTeams(allTeams)
}

export function loadTeam(teamId: string): Team | null {
  const allTeams = getListOfTeams()
  const team = allTeams.find((team) => team.id === teamId)
  if (team) {
    return team
  }
  return null
}

export function updateTeam(
  teamId: string,
  name: string,
  players: string[],
  configuration: TeamConfiguration,
): void {
  const allTeams = getListOfTeams()
  const teamIndex = allTeams.findIndex((team) => team.id === teamId)
  if (teamIndex !== -1) {
    allTeams[teamIndex].name = name
    // Maybe to do later is to maintain the player Ids, if we eventually care
    allTeams[teamIndex].players = players.map((player: string) => createPlayer(player))
    allTeams[teamIndex].configuration = configuration
    setListOfTeams(allTeams)
  }
}

export function getListOfMatches(): MatchSummary[] {
  const allMatches = localStorage.getItem('matchesList')
  if (allMatches) {
    return JSON.parse(allMatches) as MatchSummary[]
  }
  return []
}

export function setListOfMatches(matches: MatchSummary[]): void {
  localStorage.setItem('matchesList', JSON.stringify(matches))
}

export function addNewMatch(teamId: string, opponentName: string): string {
  const allMatches = getListOfMatches()
  const newMatch = createMatchSummary(teamId, opponentName)
  allMatches.push(newMatch)
  setListOfMatches(allMatches)
  return newMatch.id
}

export function loadMatchSummary(matchId: string): MatchSummary | null {
  const allMatches = getListOfMatches()
  const match = allMatches.find((match) => match.id === matchId)
  if (match) {
    return match
  }
  return null
}

export function loadInMatchDetails(matchId: string): InMatchForm | null {
  const match = localStorage.getItem(matchId)
  if (match) {
    return JSON.parse(match) as InMatchForm
  }
  return null
}

export function saveMatchDetails(match: InMatchForm): void {
  localStorage.setItem(match.id, JSON.stringify(match))
}

export function deleteMatchDetails(matchId: string): void {
  localStorage.removeItem(matchId)
}
