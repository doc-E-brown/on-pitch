import { WelcomePanel } from './WelcomePanel'
import { GiSoccerField } from 'react-icons/gi'
import { ButtonRow } from './ButtonRow'
import { Button } from '../Input'
import { useNavigate } from 'react-router'

export function MatchManagement() {
  const navigate = useNavigate()

  const startNewMatch = () => {
    navigate('/match/new')
  }

  return (
    <WelcomePanel
      title={'Match Management'}
      icon={<GiSoccerField className="text-brand-base1-10 align-middle inline-block" size={32} />}
    >
      <ButtonRow>
        <Button onClick={startNewMatch}>Start a New Match</Button>
      </ButtonRow>
    </WelcomePanel>
  )
}
