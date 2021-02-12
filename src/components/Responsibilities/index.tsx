import React from 'react'
import { Layout, MenuButtons } from '../commons'
import { Container, Box } from './style'
import { ResponsibilitiesType, ResponsibilitiesFormState } from './types'
import { FetchResponsibilities } from './hooks'
import Form from './Form'
import List from './List'

const Responsibilities = () => {
  const [responsibilities, setResponsibilities] = React.useState<
    ResponsibilitiesType[]
  >([])
  const [formState, setFormState] = React.useState<ResponsibilitiesType>(
    ResponsibilitiesFormState,
  )
  const [formUpdate, setFormUpdate] = React.useState<boolean>(false)

  const [selectId, setSelectId] = React.useState<string[]>([])

  FetchResponsibilities(setResponsibilities)

  const submit = (data: ResponsibilitiesType) => {
    console.log(data)
  }
  return (
    <Layout title="Cargos">
      <Container>
        <Box>
          <Form
            handleSubmit={submit}
            formState={formState}
            update={formUpdate}
          />
        </Box>
        <Box>
          <MenuButtons
            backButton={false}
            totalIdsSelecteds={selectId.length}
            editOnClick={() => {}}
            removeOnClick={() => {}}
            hideNewButton
          />
          <List
            initResponsibilities={responsibilities}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default Responsibilities
