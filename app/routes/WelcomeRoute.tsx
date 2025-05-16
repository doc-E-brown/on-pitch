import { useNavigate } from 'react-router'
import { MainPanel, Banner } from 'app/ui/Layout'
import { Button } from 'app/ui/Input'
import { HiUserGroup } from 'react-icons/hi'
import { ReactNode } from 'react'
import { GiSoccerField } from 'react-icons/gi'

function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col pt-4">{children}</div>
}

export default function WelcomeRoute() {
  const navigate = useNavigate()

  function handleCreateNewTeam() {
    navigate('/team/new')
  }

  function handleNewMatch() {
    navigate('/match/new')
  }

  function loadMatch() {
    navigate
  }

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
        </div>
        <div className={'w-full p-4 rounded-lg bg-brand-base2-25'}>
          <div className="w-full flex-col font-bold inline-block pb-2 justify-items-center items-center text-center">
            <HiUserGroup className="text-brand-base1-10 align-middle inline-block" size={32} />
            <span className="text-brand-base1-10 inline-block align-middle text-2xl pl-2 justify-items-center">
              Team Management
            </span>
          </div>
          <ButtonRow>
            <Button onClick={handleCreateNewTeam}>Create New Team</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => {}}>Edit Existing Team</Button>
          </ButtonRow>
        </div>
        <div className="h-8"></div>
        <div className={'w-full p-4 rounded-lg bg-brand-base2-25'}>
          <div className="w-full flex-col font-bold inline-block pb-2 justify-items-center items-center text-center">
            <GiSoccerField className="text-brand-base1-10 align-middle inline-block" size={32} />
            <span className="text-brand-base1-10 inline-block align-middle text-2xl pl-2 justify-items-center">
              Match Management
            </span>
          </div>
          <ButtonRow>
            <Button onClick={handleNewMatch}>Start New Match</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => {}}>View Previous Matches</Button>
          </ButtonRow>
        </div>
      </MainPanel>
    </div>
  )
}
