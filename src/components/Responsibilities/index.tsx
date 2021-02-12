import React from 'react'
import { useDispatch } from 'react-redux'
import { Layout, MenuButtons } from '../commons'
import { Container, Box } from './style'
import { ResponsibilitiesType, ResponsibilitiesFormState } from './types'
import { FetchResponsibilities } from './hooks'
import Form from './Form'
import List from './List'
import { responsabilityAction } from './redux'

const Responsibilities = () => {
  const [responsibilities, setResponsibilities] = React.useState<
    ResponsibilitiesType[]
  >([])
  const [formState, setFormState] = React.useState<ResponsibilitiesType>(
    ResponsibilitiesFormState,
  )
  const [formUpdate, setFormUpdate] = React.useState<boolean>(false)

  const [selectId, setSelectId] = React.useState<string[]>([])

  const dispatch = useDispatch()

  FetchResponsibilities(setResponsibilities)

  const submit = (data: ResponsibilitiesType) => {
    !formUpdate && dispatch(responsabilityAction.store(data))
    formUpdate && dispatch(responsabilityAction.update(data))
  }

  const editOnClick = (id: string) => {
    setSelectId([id])
    setFormState(responsibilities.filter((r) => r.id === id && r)[0])
    setFormUpdate(true)
  }

  const removeOnClick = () => dispatch(responsabilityAction.delete(selectId))

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
            removeOnClick={removeOnClick}
            hideNewButton
          />
          <List
            initResponsibilities={responsibilities}
            selectId={selectId}
            editOnClick={editOnClick}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default Responsibilities
