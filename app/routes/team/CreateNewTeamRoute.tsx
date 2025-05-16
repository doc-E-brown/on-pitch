import { CreateTeamForm } from '~/forms/CreateTeam'
import { MainPanel, Banner } from '~/ui/Layout'

export default function CreateNewTeamRoute() {
  return (
    <div className="overflow-x-hidden">
      <Banner>
        <div className="text-brand-base1-10 text-2xl">Create New Team</div>
      </Banner>
      <MainPanel>
        <CreateTeamForm />
      </MainPanel>
    </div>
  )
}
