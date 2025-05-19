import { ChangeEvent } from 'react'

export type DropDownElement = {
  id: string
  value: string
  label: string
}

export type DropDownProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  includeEmpty?: boolean
  values: DropDownElement[]
  defaultValue?: string
}

export function DropDown({ values, onChange, includeEmpty, defaultValue }: DropDownProps) {
  return (
    <select onChange={onChange}>
      {includeEmpty && <option value="" />}
      {values.map((value) => (
        <option
          key={value.id}
          value={value.value}
          selected={defaultValue ? value.value === defaultValue : false}
        >
          {value.label}
        </option>
      ))}
    </select>
  )
}
