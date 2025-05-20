import { WelcomePanel } from './WelcomePanel'
import { GiSoccerField } from 'react-icons/gi'
import { ButtonRow } from './ButtonRow'
import { Button } from '../Input'
import { useNavigate } from 'react-router'
import { getListOfMatches } from '~/data'

export function MatchManagement() {
  const navigate = useNavigate()

  const allMatches = getListOfMatches()

  const startNewMatch = () => {
    void navigate('/match/new')
  }

  const loadMatch = (matchId: string) => {
    void navigate(`/match/${matchId}`)
  }

  return (
    <WelcomePanel
      title={'Match Management'}
      icon={<GiSoccerField className="text-brand-base1-10 align-middle inline-block" size={32} />}
    >
      <ButtonRow>
        <Button onClick={startNewMatch}>Start a New Match</Button>
      </ButtonRow>
      <ButtonRow>
        {allMatches.length > 0 && (
          <div className="bg-brand-base2-100 rounded-2xl p-2 font-bold">
            <div className="w-full flex-col font-bold text-md p-2 text-center text-brand-base1-10">
              View / Continue Previous Match
            </div>
            <div className="w-full flex-col font-bold text-md p-2">
              {allMatches.map((match) => {
                return (
                  <>
                    <Button
                      className="w-full flex rounded-2xl p-2 bg-brand-base2-10 justify-center"
                      onClick={() => {
                        loadMatch(match.id)
                      }}
                    >
                      {new Date(match.date).toLocaleString('en-AU', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}{' '}
                      vs {match.opponentName.substring(0, 10)}...
                    </Button>
                    <div className="h-2" />
                  </>
                )
              })}
            </div>
          </div>
        )}
      </ButtonRow>
    </WelcomePanel>
  )
}
