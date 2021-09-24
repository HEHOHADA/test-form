import { Field } from 'formik'
import { BaseForm, DropdownField, Checkbox } from 'ui/base/form'
import { Item } from 'ui/dropdown/DropdownBase'
import {
  CheckboxContainer,
  FormikForm,
  Header,
  HeaderContainer,
  LinkContainer,
  RegisterFieldControl,
  StyledLink,
  SubmitButton,
  Text,
} from './FormStyled'
import { schema } from './RegistrationSchema'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  language: '',
  accept: false,
} as const

const dropdownItems: Array<Item> = [
  { value: 'Русский', content: 'Русский' },
  { value: 'Английский', content: 'Английский' },
  { value: 'Китайский', content: 'Китайский' },
  { value: 'Испанский', content: 'Испанский' },
]

export type RegFormValues = typeof defaultValues

const CheckboxLabel = (
  <LinkContainer>
    <Text>
      Принимаю
      <StyledLink>условия</StyledLink>
      использования
    </Text>
  </LinkContainer>
)

export const RegistrationForm = () => {
  const onSubmit = (value: RegFormValues) => {
    console.log('here', value)
  }

  return (
    <BaseForm<RegFormValues>
      initialValues={defaultValues}
      validationSchema={schema}
      onSubmit={onSubmit}>
      <FormikForm>
        <HeaderContainer>
          <Header>Регистрация</Header>
          <LinkContainer>
            <Text>Уже есть аккаунт?</Text>
            <StyledLink>Войти</StyledLink>
          </LinkContainer>
        </HeaderContainer>
        <RegisterFieldControl name='name' label='Имя' placeholder='Введите Ваше имя' />
        <RegisterFieldControl
          name='email'
          type='email'
          label='Еmail'
          placeholder='Введите ваш email'
        />
        <RegisterFieldControl
          name='phone'
          type='tel'
          label='Номер телефона'
          placeholder='Введите номер телефона'
        />
        <Field
          name='language'
          label='Язык'
          title='Язык'
          id='language'
          items={dropdownItems}
          menuWidth='calc(100% - 28px)'
          as={DropdownField}
        />
        <CheckboxContainer>
          <Field
            name='accept'
            as={Checkbox}
            label={CheckboxLabel}
            css='margin-bottom: 7px'
          />
        </CheckboxContainer>
        <SubmitButton type='submit' text='Зарегистрироваться' />
      </FormikForm>
    </BaseForm>
  )
}
