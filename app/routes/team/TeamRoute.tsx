import { Info } from '+/types/TeamRoute'
import { TeamForm } from 'app/forms/Team'
import { MainPanel, Banner } from '~/ui/Layout'
import { loadTeam } from '~/data'

export default function TeamRoute({ params: { teamId } }: Info) {
  if (teamId) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const team = loadTeam(teamId)
    if (team == null) {
      return (
        <div className="overflow-x-hidden">
          <Banner>
            <div className="text-brand-base1-10 text-2xl">Edit Team</div>
          </Banner>
          <MainPanel>
            <h1 className="text-brand-base2-100 text-center">Team Not Found</h1>
          </MainPanel>
        </div>
      )
    }
  }

  return (
    <div className="overflow-x-hidden">
      <Banner>
        <div className="text-brand-base1-10 text-2xl">{teamId ? 'Edit' : 'Create New'} Team</div>
      </Banner>
      <MainPanel>
        <TeamForm
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          teamId={teamId}
        />
      </MainPanel>
    </div>
  )
}
