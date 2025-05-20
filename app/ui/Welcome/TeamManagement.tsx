import { HiUserGroup } from 'react-icons/hi'
import { Button } from '~/ui/Input'
import { WelcomePanel } from './WelcomePanel'
import { ButtonRow } from './ButtonRow'
import { useNavigate } from 'react-router'
import { getListOfTeams } from '~/data'

export function TeamManagement() {
  const navigate = useNavigate()

  const allTeams = getListOfTeams()

  const createTeam = () => {
    void navigate('/team')
  }

  const editTeam = (teamId: string) => {
    void navigate(`/team/${teamId}`)
  }

  return (
    <WelcomePanel
      title={'Team Management'}
      icon={<HiUserGroup className="text-brand-base1-10 align-middle inline-block" size={32} />}
    >
      <ButtonRow>
        <Button onClick={createTeam}>Create New Team</Button>
      </ButtonRow>
      <ButtonRow>
        {allTeams.length > 0 ? (
          <div className="bg-brand-base2-100 rounded-2xl p-2 font-bold">
            <div className="w-full flex-col font-bold text-md p-2 text-center text-brand-base1-10">
              Edit Existing Team
            </div>
            <div className="w-full flex-col font-bold text-md p-2">
              {allTeams.map((team) => {
                return (
                  <>
                    <Button
                      key={team.id}
                      className="w-full flex rounded-2xl p-2 bg-brand-base2-10 justify-center"
                      onClick={() => {
                        editTeam(team.id)
                      }}
                    >
                      {team.name}
                    </Button>
                    <div className="h-2" />
                  </>
                )
              })}
            </div>
          </div>
        ) : null}
      </ButtonRow>
    </WelcomePanel>
  )
}
