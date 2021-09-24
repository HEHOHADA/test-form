import { FC } from 'react'
import { FieldAttributes, useField } from 'formik'

import { TextField, TextFieldProps } from '../TextField/TextField'

export type FieldControlProps = FieldAttributes<TextFieldProps>

export const FieldControl: FC<FieldControlProps> = (props) => {
  const [field, meta] = useField(props)
  const { onChange, onBlur, error, ...restProps } = props

  return (
    <TextField
      {...field}
      {...restProps}
      error={meta.touched ? error || meta.error : undefined}
      onChange={(event) => {
        onChange?.(event)
        field.onChange(event)
      }}
      onBlur={(event) => {
        field.onBlur(event)
        onBlur?.(event)
      }}
    />
  )
}
