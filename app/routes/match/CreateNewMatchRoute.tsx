import { NewMatchForm } from 'app/forms/Match'
import { useNavigate } from 'react-router'
import { MainPanel, Banner } from '~/ui/Layout'

export default function CreateNewMatchRoute() {
  const navigate = useNavigate()

  const handleCreateNewMatch = (id: string) => {
    void navigate(`/match/${id}`)
  }

  return (
    <div className="overflow-x-hidden">
      <Banner>
        <div className="text-brand-base1-10 text-2xl">Start New Match</div>
      </Banner>
      <MainPanel>
        <NewMatchForm onSubmit={handleCreateNewMatch} onSubmitText="Create Match" />
      </MainPanel>
    </div>
  )
}
