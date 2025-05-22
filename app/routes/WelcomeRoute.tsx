import { MainPanel, Banner } from '~/ui/Layout'
import { TeamManagement, MatchManagement } from '~/ui/Welcome'
import { getListOfTeams, getListOfMatches } from '~/data'
import { HashLink as Link } from 'react-router-hash-link'

export default function WelcomeRoute() {
  const aTeamExists = getListOfTeams().length > 0
  const aMatchExists = getListOfMatches().length > 0

  return (
    <div>
      <Banner children="ON-PITCH" />
      <MainPanel>
        <div className={'w-full p-4 rounded-lg '}>
          On-Pitch is designed to help football coaches manage their teams during a match. I (a
          volunteer coach of my son's U11 team) wrote On-Pitch to provide a stress free way of
          ensuring each player got their fair share of time on the field. If anyone else finds this
          app useful, they are free to use it at no cost.
          <p>
            <strong>
              <Link to="/help/#EgMatch">How does it work?</Link>
            </strong>
          </p>
          {!aTeamExists && (
            <div className="w-full flex-col font-extrabold text-xl pt-2 text-center">
              Step 1: Create a Team
            </div>
          )}
        </div>
        <TeamManagement />
        <div className="h-8"></div>
        {aTeamExists && !aMatchExists && (
          <div className="w-full flex-col font-extrabold text-xl pt-2 text-center">
            Step 2: Start a Match
          </div>
        )}
        {aTeamExists && <MatchManagement />}
        <div className="h-8"></div>
      </MainPanel>
    </div>
  )
}
