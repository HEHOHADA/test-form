import { FC, InputHTMLAttributes, Ref, useState } from 'react'
import { Hint, HintWrap, Label, LabelText, TextFieldInput } from './TextFieldStyled'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  type?: 'text' | 'email' | 'tel' | 'number'
  inputRef?: Ref<HTMLInputElement>
  error?: string | JSX.Element
  className?: string
}

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    label,
    hint,
    error,
    inputRef,
    children,
    type = 'text',
    className,
    ...rest
  } = props
  const invalidState = !!error
  const [labelTextHeight, setLabelTextHeight] = useState<number>()

  return (
    <div className={className}>
      <Label labelTextHeight={labelTextHeight}>
        {label && (
          <LabelText
            ref={(element: HTMLSpanElement | null) => {
              setLabelTextHeight(
                element?.getBoundingClientRect().height || labelTextHeight,
              )
            }}>
            {label}
          </LabelText>
        )}
        <TextFieldInput {...rest} type={type} isInvalid={invalidState} ref={inputRef} />
      </Label>
      {(hint ?? error) && (
        <HintWrap>
          <Hint isInvalid={invalidState}>{invalidState ? error : hint}</Hint>
        </HintWrap>
      )}
    </div>
  )
}
