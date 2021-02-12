import React from 'react'
import { Formik, FormikValues, Form, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import validator from './validator'
import { ResponsibilitiesType } from '../types'
import { Input, Title, BoxInput, Label, Row } from '../../commons/Form'

interface Props {
  handleSubmit: any
  formState: ResponsibilitiesType
  update: boolean
}

const FormResponsibilities: React.FC<Props> = ({
  handleSubmit,
  formState,
  update,
}) => {
  return (
    <div>
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
              <BoxInput w="100%">
                <Label>Cargo*:</Label>
                <Input type="text" name="description" />
                <ErrorMessage name="description" />
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

export default FormResponsibilities
