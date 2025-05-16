import { useNavigate } from 'react-router'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import { InMatchForm, useInMatchForm } from './useInMatchForm'
import { loadMatchSummary, saveMatchDetails } from '~/data'
import { GameClock, PlayerManagement } from '~/ui/Match'
import { useTick } from '~/ui/hooks'
import { MainPanel } from '~/ui/Layout'
import { Button } from '~/ui/Input/Button'
import { GameScore } from '~/ui/Match/GameScore'

export function MatchForm({ matchId }: { matchId: string }) {
  const formProps = useInMatchForm({ matchId })
  const navigate = useNavigate()

  const { watch, setValue, handleSubmit } = formProps

  const matchSummary = loadMatchSummary(matchId)

  const initialClock = watch('gameClock')
  const teamName = watch('team.name')

  const save = () => {
    const matchUpdate = formProps.getValues()
    if (matchUpdate) {
      saveMatchDetails(matchUpdate)
    }
  }

  useTick(1000, save)

  const finishGame: SubmitHandler<InMatchForm> = (data) => {
    setValue('isGamePlaying', 'finished')
    save()
    navigate('/')
  }

  let titleText = teamName

  if (matchSummary !== null && matchSummary.opponentName !== '') {
    titleText = `${titleText} vs ${matchSummary.opponentName}`
  }

  if (titleText.length > 20) {
    titleText = `${titleText.substring(0, 15)}...`
  }

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(finishGame)}>
        <div className="relative size-16 p-4 w-full bg-brand-base2-100 ">
          <div className="absolute left-4 size-16 w-full overflow-hidden text-brand-base1-10 text-2xl font-extrabold">
            {titleText}
          </div>
          <div className="absolute right-16 size-16">
            <GameClock initialClock={initialClock} />
          </div>
        </div>
        <div clasName="relative flex w-full h-full overflow-x-hidden overflow-y-scroll">
          <MainPanel>
            <GameScore
              teamName={teamName}
              opponentName={matchSummary?.opponentName ?? 'Opposition'}
            />
            <PlayerManagement />
            <div className="relative size=16 w-full">
              <div className="absolute left-4">
                <Button
                  type="submit"
                  className="bg-brand-base2-100 rounded-lg p-4 font-bold, text-brand-base1-10"
                  children={'Finish Game'}
                />
              </div>
              <div className="absolute right-16">
                <Button
                  type="button"
                  className="bg-brand-accent2 rounded-lg p-4 font-bold, text-brand-base1-10"
                  children={'Reset Game'}
                />
              </div>
            </div>
          </MainPanel>
        </div>
      </form>
    </FormProvider>
  )
}
