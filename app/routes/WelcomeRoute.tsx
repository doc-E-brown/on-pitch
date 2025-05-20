import { MainPanel, Banner } from '~/ui/Layout'
import { TeamManagement, MatchManagement } from '~/ui/Welcome'
import { getListOfTeams, getListOfMatches } from '~/data'

export default function WelcomeRoute() {
  const aTeamExists = getListOfTeams().length > 0
  const aMatchExists = getListOfMatches().length > 0

  return (
    <div>
      <Banner>
        <div className="text-brand-base1-10 w-full justify-items-center text-center text-3xl">
          ON PITCH
        </div>
      </Banner>
      <MainPanel>
        <div className={'w-full p-4 rounded-lg '}>
          On-Pitch is designed to help football coaches manage their teams during a match. On-Pitch
          provides a user-friendly interface for managing time on field for players and takes the
          stress out of ensuring each player gets the right amount of time on the field.
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
      </MainPanel>
    </div>
  )
}
