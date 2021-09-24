import * as yup from 'yup'
import { AnySchema } from 'yup/lib/schema'
import { RegFormValues } from './RegistrationForm'

const phoneRegex =
  /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/

const requiredFieldErr = 'Обязательное поле'

export const schema = yup.object().shape<Record<keyof RegFormValues, AnySchema>>({
  name: yup
    .string()
    .matches(/^[\p{L}]+$|-/u, 'Введено не корректное значение')
    .required(requiredFieldErr),
  email: yup.string().email('Введено не корректное значение').required(requiredFieldErr),
  phone: yup
    .string()
    .matches(phoneRegex, 'Введено не корректное значение')
    .required(requiredFieldErr),
  language: yup.string().required(requiredFieldErr),
  accept: yup.boolean().oneOf([true], 'Field must be checked'),
})
