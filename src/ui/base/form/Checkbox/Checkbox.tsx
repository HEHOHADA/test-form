import { FC, MouseEvent, ReactElement } from 'react'
import { useField } from 'formik'
import { CheckMarkStyled, InputStyled, LabelStyled } from './CheckboxStyled'
import { Hint, HintWrap } from '../TextField/TextFieldStyled'

export type CheckboxProps = {
  label?: string | ReactElement
  name: string
  onClick?: (e: MouseEvent<HTMLLabelElement>) => void
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { label, name, onClick } = props
  const [field, meta] = useField(name)
  const { error, value = false } = meta

  return (
    <div>
      <LabelStyled onClick={onClick}>
        <InputStyled
          type='checkbox'
          {...field}
          value={value.toString()}
          checked={value}
          onClick={(e) => e.stopPropagation()}
        />
        <CheckMarkStyled />
        {label}
      </LabelStyled>
      {meta.touched && error && (
        <HintWrap>
          <Hint isInvalid>{error}</Hint>
        </HintWrap>
      )}
    </div>
  )
}
