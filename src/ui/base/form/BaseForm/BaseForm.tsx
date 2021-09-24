import { Formik, FormikConfig, FormikProps } from 'formik'
import { PropsWithChildren } from 'react'

export interface BaseFormValues {}

export type BaseFormProps<T = BaseFormValues> = Omit<FormikConfig<T>, 'children'> & {
  initialValues: T
}

export const BaseForm = <T extends BaseFormValues>(
  props: PropsWithChildren<BaseFormProps<T>>,
) => {
  const { initialValues = {}, children, ...restProps } = props

  const formikConfig: FormikConfig<T> = {
    ...restProps,
    initialValues: initialValues as T,
  }

  if (typeof children === 'function') {
    return (
      <Formik {...formikConfig}>
        {(formikProps: FormikProps<T>) => children(formikProps)}
      </Formik>
    )
  }

  return <Formik {...formikConfig}>{children}</Formik>
}
