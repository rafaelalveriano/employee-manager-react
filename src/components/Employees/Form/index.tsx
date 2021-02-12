import React from 'react'
import { Formik, FormikValues, Form, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import validator from './validator'
import { ResponsibilitiesType } from '../../Responsibilities/types'
import { EmployeeType } from '../types'
import { HttpClient } from '../../../services'
import { Input, Title, BoxInput, Label, Row } from '../../commons/Form'

interface Props {
  handleSubmit: any
  formState: EmployeeType
  update: boolean
}

const FormEmployee: React.FC<Props> = ({ handleSubmit, formState, update }) => {
  const [responsibilities, setResponsibilities] = React.useState<
    ResponsibilitiesType[]
  >([])

  React.useEffect(() => {
    let isMounted = true

    const fetchResponsibilities = async () => {
      const { data } = await HttpClient().get('responsability')
      isMounted && setResponsibilities(data)
    }

    fetchResponsibilities()

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
          <Form>
            <Row>
              <BoxInput w="48%">
                <Label>Nome*:</Label>
                <Input type="text" name="firstName" placeholder="Nome" />
                <ErrorMessage name="firstName" />
              </BoxInput>

              <BoxInput w="50%" m="15px">
                <Label>Sobrenome*:</Label>
                <Input name="lastName" placeholder="Sobrenome" />
                <ErrorMessage name="lastName" />
              </BoxInput>
            </Row>
            <Row>
              <BoxInput w="48%">
                <Label>Cargos*:</Label>
                <Input
                  name="responsability"
                  as="select"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setFieldValue('responsability', e.target.value)
                  }
                >
                  <option
                    value={formState.responsability && formState.responsability}
                  >
                    {!formState.responsability
                      ? 'Cargos'
                      : formState.responsability}
                  </option>
                  {responsibilities &&
                    responsibilities.map((r, i) => (
                      <option key={i} value={r.description}>
                        {r.description}
                      </option>
                    ))}
                </Input>
                <ErrorMessage name="responsability" />
              </BoxInput>

              <BoxInput w="25%" m="15px">
                <Label>Data de nasc.*:</Label>
                <Input type="date" name="birthdata" placeholder="Sobrenome" />
                <ErrorMessage name="birthdata" />
              </BoxInput>
              <BoxInput w="25%" m="15px">
                <Label>Salário*:</Label>
                <Input type="text" name="salary" placeholder="R$" />
                <ErrorMessage name="salary" />
              </BoxInput>
            </Row>

            <Row>
              <Button
                disabled={!update && !(isValid && dirty)}
                variant="secondary"
                type="submit"
                value="Adicionar"
                block
              >
                {!update ? 'Adicionar' : 'Editar'}
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormEmployee
