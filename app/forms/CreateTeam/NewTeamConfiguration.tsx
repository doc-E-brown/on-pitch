import { AllTeamConfigurations } from '~/data'
import { NewTeam } from './useCreateTeamForm'
import { useFormContext } from 'react-hook-form'
import { DropDown, DropDownElement } from '~/ui/Input/DropDown'
import { ConfigurationDescription } from '~/ui/Teams/ConfigurationDescription'
import { useState } from 'react'
import { Button } from '~/ui/Input/Button'
import { InfoIcon } from '~/ui/Icons'

export default function NewTeamConfiguration() {
  const { setValue, setError, clearErrors, watch } = useFormContext<NewTeam>()
  const [showConfig, setShowConfig] = useState(false)

  const config = watch('configuration', AllTeamConfigurations[0])

  const isValidTeam = (teamId: string) => AllTeamConfigurations.some((team) => team.id === teamId)

  const selectTeam = (id: string) => {
    if (!isValidTeam(id)) {
      setError('configuration', { type: 'manual', message: 'Invalid team configuration' })
      return
    }
    const selectedTeam = AllTeamConfigurations.filter((team) => id == team.id)
    if (selectedTeam[0]) {
      console.log(selectedTeam[0])
      setValue('configuration', selectedTeam[0])
      clearErrors()
    }
  }

  const configValues: DropDownElement[] = AllTeamConfigurations.map((team) => ({
    id: team.id,
    value: team.id,
    label: team.name,
    isSelected: () => team.id === config?.id,
  }))

  const toggleConfigDescription = () => {
    if (config) {
      setShowConfig(!showConfig)
    }
  }

  return (
    <div className="justify-center items-center relative pb-4 ">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <span className="font-bold pr-4 text-lg">Competition</span>
        </div>
        <div className="col-span-1">
          <DropDown onChange={(e) => selectTeam(e.target.value)} values={configValues} />
          <Button onClick={toggleConfigDescription} className="justify-center">
            <InfoIcon size="15" />
          </Button>
        </div>
      </div>
      {showConfig && <ConfigurationDescription config={config} />}
    </div>
  )
}
