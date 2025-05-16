import { ChangeEvent } from 'react'

export type DropDownElement = {
  id: string
  value: string
  label: string
  isSelected: () => boolean
}

export type DropDownProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  includeEmpty?: boolean
  values: DropDownElement[]
}

export function DropDown({ values, onChange, includeEmpty }: DropDownProps) {
  return (
    <select onChange={onChange} defaultValue={''}>
      {includeEmpty && <option value="" selected={true} />}
      {values.map((value) => (
        <option key={value.id} value={value.value} selected={value.isSelected()}>
          {value.label}
        </option>
      ))}
    </select>
  )
}
