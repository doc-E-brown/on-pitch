import { Banner, MainPanel } from '~/ui/Layout'
import { InfoIcon, OnField, Reserve } from '~/ui/Icons'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

function ShowImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={'pt-4 pb-4'}>
      <img src={`/${src}`} alt={alt} className={'mx-auto border-4 border-brand-accent1'} />
    </div>
  )
}

export default function HelpRoute() {
  return (
    <>
      <Banner>Help</Banner>
      <MainPanel>
        <div className={'w-full p-4 rounded-lg '}>
          <h1>About</h1>
          <p>
            On-Pitch is designed to help football coaches manage their teams during a match. I (a
            volunteer coach of my son's U11 team) wrote On-Pitch to provide a stress free way of
            ensuring each player got their fair share of time on the field. If anyone else finds
            this app useful, they are free to use it at no cost.
          </p>
          <p>
            On-Pitch is an open source project, licensed under the GPL V3 license. Any suggestions,
            feedback or contributions are welcome but I cannot make any promises regarding their
            inclusion or speed of development. For more information refer to the{' '}
            <a href={'https://github.com/doc-E-brown/on-pitch'}>
              Github Project{' '}
              <div className={'inline-block justify-items-center items-center'}>
                <VscGithub size={16} />
              </div>
              .
            </a>
          </p>
          <h1>Table Of Contents</h1>
          <ul className="list-inside list-disc">
            <li className="font-bold">
              <a href={'#GettingStarted'}>Getting Started</a>
            </li>
            <li className="font-bold">
              <a href={'#CreatingATeam'}>Creating A Team</a>
            </li>
            <li className="font-bold">
              <a href={'#StartingAMatch'}>Starting A Match</a>
              <li className="pl-4 font-bold">
                <a href={'#GameClock'}>Game Clock</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#ScoreTracker'}>The Score Tracker</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#RosterMgmt'}>Roster Management</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#OnFieldPanel'}>The On Field Panel</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#ReservesPanel'}>The Reserves Panel</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#PlayerCards'}>Player Cards</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#ReservesButton'}>The Reserve Button</a>
              </li>
              <li className="pl-4 font-bold">
                <a href={'#FinishReset'}>The Finish / Reset Button</a>
              </li>
            </li>
            <li className="font-bold">
              <a href={'#EgMatch'}>Example Match</a>
            </li>
            <li className="font-bold">
              <a href={'#DataMgmt'}>Data Management</a>
            </li>
          </ul>
          <h1 id="GettingStarted">Getting Started</h1>
          <p>
            The On-Pitch application has been designed to be easy to use and quick to get running.
            There are only two steps to using the application:
            <div className="h-2"></div>
            <p>
              <ol className={'list-decimal list-inside'}>
                <li className={'[&::marker]:font-bold'}>Create a team to manage, and</li>
                <li className={'[&::marker]:font-bold'}>Create a match for the team</li>
              </ol>
            </p>
          </p>
          <h1 id="CreatingATeam">Creating a Team</h1>
          To create a new team first click on the <strong>Create New Team</strong> button on the
          main page.
          <ShowImage src={'CreateTeamButton.png'} alt={'CreateTeamButton'} />
          <p>
            Then enter a unique name for the team. If the name is already being used by another team
            you will be prompted to change the name.
          </p>
          <p>
            Next, select the competition the team is playing in. The competitions are pre-configured
            for those used by Football Australia. The open competition is used for Adults and teams
            that are older than Under 11s and follow FIFA rules. Clicking on the{' '}
            <InfoIcon size={14} /> icon will provide more information about the competition.{' '}
            <strong>
              Note: ensure the correct competition is selected as this information will be used
              while tracking the status of a match.
            </strong>
            If, for example you accidentally select the Under 7s competition the match tracker will
            not allow for a Keeper to be selected and the match will be tracked as a 4v4 match.
          </p>
          <ShowImage src={'CompetitionInfo.png'} alt={'CompetitionInfo'} />
          <p>
            Finally add the players to the team. Note that each player on each team must also have
            unique names. If you try to add a player with the same name as another player in the
            team, you will be prompted to change the name of the player. If you need additional
            fields to add more players, click on the{' '}
            {
              <div className="relative inline-block items-center">
                <FaPlusCircle size={12} />
              </div>
            }{' '}
            icon. Once you have at least the number of players required on the field, click on the{' '}
            <strong>Create Team</strong> button to create the team.
          </p>
          <ShowImage src={'CreateNewTeam.gif'} alt={'CreateNewTeam'} />
          <h1 id={'StartingAMatch'}>Starting a Match</h1>
          <p>
            Once a team has been created, you can start a match for the team. To do this click on
            the <strong>Start a New Match</strong> button on the main page.
            <ShowImage src={'CreateMatchButton.png'} alt={'CreateMatchButton'} />
            Select the team you want to start a match for using the drop down menu and enter the
            name of your opponent. The name of the opponent is used to track the match and will be
            displayed on the match tracker. Once you have selected the team and entered the name of
            the opponent, click on the <strong>Create Match</strong> button to start the match.
            <ShowImage src={'StartMatch.png'} alt={'StartMatch'} />
          </p>
          <p>
            Once the match has been created, you will be taken to the match tracker. The match
            tracker is divided into three main sections:
            <ol className={'list-decimal list-inside'}>
              <li className={'[&::marker]:font-bold'}>The Game Clock</li>
              <li className={'[&::marker]:font-bold'}>The Score Tracker, and</li>
              <li className={'[&::marker]:font-bold'}>Roster Management</li>
            </ol>
          </p>
          <ShowImage src={'MatchTracker.png'} alt={'MatchTrackerSections'} />
          <h2 id={'GameClock'}>The Game Clock</h2>
          <p>
            The game clock is used to both track the amount of time played in the match and the time
            each player has spend on the field. The game clock can be started and stopped using the
            Play/Pause button. There is no limit to the number of times the clock can be started and
            stopped, though it is recommended that you start / stop the game clock with the
            referee's whistle.
            <ShowImage src={'GameClock.png'} alt={'GameClock'} />
          </p>
          <h2 id={'ScoreTracker'}>The Score Tracker</h2>
          <p>
            This is a very simple component that is used to manually track the score of the match.
            The{' '}
            {
              <div className="relative inline-block items-center">
                <FaPlusCircle size={12} />
              </div>
            }
            {'/'}
            {
              <div className="relative inline-block items-center">
                <FaMinusCircle size={12} />
              </div>
            }{' '}
            are used to increase / decrease the score of each team.
            <ShowImage src={'ScoreTracker.png'} alt={'ScoreTracker'} />
          </p>
          <h2 id="RosterMgmt">Roster Management</h2>
          <p>
            This is the main component of the match tracker. The roster management component is used
            to track the players on the field, the players on the bench and statistics such as game
            time and the number of substitutions made for each player. Within the Roster Management
            component there are up to 4 panels that represent the status of each player:
            <ol className={'list-decimal list-inside'}>
              <li className={'[&::marker]:font-bold'}>
                The Keeper panel. If there competition allows the use of a GoalKeeper this panel
                will be present.
              </li>
              <li className={'[&::marker]:font-bold'}>
                The Players on the field (excluding the GoalKeeper).
              </li>
              <li className={'[&::marker]:font-bold'}>
                {' '}
                The Reserve players on the bench awaiting game time.
              </li>
              <li className={'[&::marker]:font-bold'}>
                {' '}
                The players that are unavailable for the match.
              </li>
            </ol>
            <ShowImage src={'RosterPanel.png'} alt={'RosterPanel'} />
          </p>
          <h2 id={'OnFieldPanel'}>The On Field Panel</h2>
          <p>
            The on field panel is used to track the players on the field. Players are added to the
            on field panel using the <OnField size={20} />. Once a player is on the field their game
            time is tracked and the current number of players on the field, compared to the maximum
            number is updated and displayed in the panel title.
            <ShowImage src={'OnField.png'} alt={'OnField'} />
            The players on the field are displayed in a game time order with the players with the
            most game time at the top of the list, thus making it easier to balance player game
            time.
          </p>
          <h2 id={'ReservesPanel'}>The Reserves Panel</h2>
          <p>
            The reserves panel is used to track the players on the bench. Similarly to the On Field
            panel, the current number of reserves compared with the maximum amount is tracked.
            Players are added to the reserves panel using the <Reserve size={20} />. Once a player
            is on the bench game time is no longer tracked. Players are added to the reserves bench
            on a first in first out basis, so the player that is most recently substituted off the
            field will be at the bottom of the list. It is recommended that when players are
            substituted onto the field, the player that is at the top of the reserves list is first
            selected.
            <ShowImage src={'ReservesPanel.png'} alt={'ReservesPanel'} />
          </p>
          <h2 id={'PlayerCards'}>Player Cards</h2>
          <p>
            Each player is represented by a player card, which is used track/change the playing
            status of a player as well as their game time and number of made substitutions.
            <ShowImage src={'PlayerCard.png'} alt={'PlayerCard'} />
            Each player card is made up of three main sections, in order from left to right:
            <ol className={'list-decimal list-inside'}>
              <li className={'[&::marker]:font-bold'}>The player's name</li>
              <li className={'[&::marker]:font-bold'}>
                The amount of time the player has spent on the field. This value is only updated
                when the player is in the on field position and the game clock is running. Time
                spent as a GoalKeeper is <strong>not</strong> included in this value.
              </li>
              <li className={'[&::marker]:font-bold'}>
                Buttons to change the status of the player. Each player card contains a button for
                each of the possible statuses of a player. Tapping or clicking on a button will move
                the player to the selected status, if there is space in the target status e.g. you
                wont be able to move a player to the on field position or goal keeper positions if
                there are already the maximum number of players in those positions.
              </li>
            </ol>
          </p>
          <h2 id={'ReservesButton'}>The Reserve Button</h2>
          <p>
            The reserve button is used to move a player from an on field position to the reserves
            bench.
            <ShowImage src={'ReservesButton.png'} alt={'ReservesButton'} />
            The other key feature of this button is the counter that is in the top right corner of
            the button. This counter is used to track the number of substitutions made for the
            player. Each time a player is moved to the reserves bench, the counter is incremented by
            1. The counter enables coaches / manages to balance the number of times a player has
            been substituted.
          </p>
          <h2 id={'FinishReset'}>The Finish / Reset Buttons</h2>
          <p>
            At the bottom of the page are the finish / reset buttons. When clicking on the finish
            button the game clock is stopped and the user is returned to the home screen. Clicking
            on the reset button will reset all parameters of the match to the default values and the
            match will be in the same state as before it started.
            <ShowImage src={'FinishResetMatch.png'} alt={'FinishResetMatch'} />
          </p>
          <h1 id={'EgMatch'}>Example Match</h1>
          <ShowImage src={'ExampleMatch.gif'} alt={'ExampleMatch'} />
          <h1 id={'DataMgmt'}>Data Management</h1>
          <p>
            All data is stored locally on the device and within the browser. At no stage is any of
            the team / match data sent off device. This is why no login screen is required, but also
            why sharing team / match data between device is not supported. When a match is being
            tracked, the match data is regularly saved to the device, so if for any reason the page
            is accidentally refreshed or closed, the match data will still be available and the
            match can continue to be tracked without any additional effort.
          </p>
        </div>
        <div className="h-8"></div>
      </MainPanel>
    </>
  )
}
