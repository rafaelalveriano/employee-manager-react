import React from 'react'
import { Formik, FormikValues } from 'formik'
import validator from './validator'
import { ResponsibilitiesType } from '../../Responsibilities/ResponsibilitiesType'
import { EmployeeType } from '../EmployeType'
import { HttpClient } from '../../../services'
import { Input, Title, BoxInput } from './style'

interface Props {
  handleSubmit: any
  formState: EmployeeType
  update: boolean
}

const FormEmployee: React.FC<Props> = ({ handleSubmit, formState, update }) => {
  const [load, setLoad] = React.useState<boolean>(false)
  const [responsibilities, setResponsibilities] = React.useState<
    ResponsibilitiesType[]
  >([])

  React.useEffect(() => {
    let isMounted = true
    setLoad(true)

    const fetchResponsibilities = async () => {
      const { data } = await HttpClient().get('responsability')
      isMounted && setResponsibilities(data)
    }

    fetchResponsibilities()
    setLoad(false)
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      <Title>Novo funcionário</Title>
      <Formik
        enableReinitialize
        initialValues={formState}
        validationSchema={validator}
        onSubmit={(values: FormikValues, { resetForm }) => {
          handleSubmit(values)
          resetForm()
        }}
      >
        {({ isValid, dirty, setFieldValue }) => (
          <>
            <BoxInput>
              <Input type="text" w="50%" name="firstName" placeholder="Nome" />
              <Input
                type="text"
                w="48%"
                m="20px"
                name="lastName"
                placeholder="Sobrenome"
              />
            </BoxInput>
            <BoxInput>
              <Input w="50%" name="firstName" placeholder="Nome" />
              <Input type="date" w="48%" m="20px" name="lastName" />
            </BoxInput>
          </>
        )}
      </Formik>
    </div>
  )
}

export default FormEmployee
