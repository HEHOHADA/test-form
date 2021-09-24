import { FC } from 'react'
import { useField, useFormikContext } from 'formik'

import { DropdownBase, DropdownBaseProps, Item } from 'ui/dropdown/DropdownBase'
import { Label, LabelText } from './DropdownFieldStyled'

export type DropdownFieldProps = DropdownBaseProps & {
  name: string
  label?: string
  className?: string
}

export const DropdownField: FC<DropdownFieldProps> = (props) => {
  const { label, onChange, className, ...other } = props
  const { setFieldValue } = useFormikContext()
  const [, meta] = useField(other.name)

  const onSelect = (selectedItem: Item | null) => {
    setFieldValue(other.name, selectedItem?.value)
  }

  return (
    <div className={className}>
      <Label>
        {label && <LabelText>{label}</LabelText>}
        <DropdownBase {...other} onSelect={onSelect} title={meta.value || other.title} />
      </Label>
    </div>
  )
}
