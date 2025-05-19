import { Info } from '+/types/ManageTeamRoute'
import { TeamForm } from '~/forms/CreateTeam'
import { MainPanel, Banner } from '~/ui/Layout'

export default function ManageTeamRoute({ params: { teamId } }: Info) {
  return (
    <div className="overflow-x-hidden">
      <Banner>
        <div className="text-brand-base1-10 text-2xl">Manage Existing Team Team</div>
      </Banner>
      <MainPanel>
        <TeamForm teamId={teamId} />
      </MainPanel>
    </div>
  )
}
