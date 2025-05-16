import { TeamConfiguration } from '~/data'

export function ConfigurationDescription({ config }: { config: TeamConfiguration }) {
  return (
    <div className="rounded-2xl bg-brand-base2-100 text-brand-base1-10 p-4">
      <h2 className="text-brand-base1-10 pb-4">Competiton Description</h2>
      <div className="grid w-full grid-cols-2">
        <div className="col-span-1 font-bold">Players On Field</div>
        <div className="col-span-1 text-right pr-8">{config.playersOnField}</div>
        <div className="col-span-1 font-bold">Reserves</div>
        <div className="col-span-1 text-right pr-8">{config.maximumReserves}</div>
        <div className="col-span-1 font-bold">Play with a Keeper</div>
        <div className="col-span-1 text-right pr-8">{config.playWithKeeper ? 'Yes' : 'No'}</div>
        <div className="col-span-1 font-bold">Time per Half</div>
        <div className="col-span-1 text-right pr-8">{config.timePerPeriod} min</div>
        <div className="col-span-1 font-bold">Half Time Duration</div>
        <div className="col-span-1 text-right pr-8">{config.breakTime} min</div>
      </div>
    </div>
  )
}
