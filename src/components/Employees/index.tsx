import React from 'react'
import { useDispatch } from 'react-redux'
import { Layout, MenuButtons } from '../commons'
import { EmployeeFormState, EmployeeType } from './types'
import { FetchEmployess } from './hooks'
import { employeeAction } from './redux'
import Form from './Form'
import List from './List'

const Empolyees = () => {
  const [employees, setEmployees] = React.useState<EmployeeType[]>([])
  const [ids, setIds] = React.useState<string[]>([])
  const [showForm, setShowForm] = React.useState(true)
  const [updateForm, setUpdateForm] = React.useState(false)
  const [formState, setFormState] = React.useState<EmployeeType>(
    EmployeeFormState,
  )
  const [load, setLoad] = React.useState(false)
  const dispatch = useDispatch()

  FetchEmployess(setLoad, setEmployees)

  const submit = (data: EmployeeType) => {
    setFormState(EmployeeFormState)
    !updateForm && dispatch(employeeAction.store(data))
    updateForm && dispatch(employeeAction.update(data))
    updateForm && setUpdateForm(false)
  }

  const editOnClick = () => {
    const employeeFiltered = employees.filter((e) => e.id === ids[0] && e)[0]
    !showForm && setShowForm(true)
    setFormState(employeeFiltered)
    setUpdateForm(true)
  }

  const remove = () => {
    setEmployees(
      employees.filter((e) => ids.indexOf(e.id as string) === -1 && e),
    )
    dispatch(employeeAction.delete(ids))
  }

  return (
    <Layout title="Funcionários">
      <>
        <MenuButtons
          totalIdsSelecteds={ids.length}
          newOnClick={() => setShowForm(showForm ? false : true)}
          editOnClick={editOnClick}
          removeOnClick={remove}
          backButton={showForm}
        />

        {showForm && (
          <Form
            handleSubmit={submit}
            formState={formState}
            update={updateForm}
          />
        )}

        <List setIds={setIds} ids={ids} initEmployees={employees} load={load} />
      </>
    </Layout>
  )
}

export default Empolyees
