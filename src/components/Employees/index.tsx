import React from 'react'
import { Layout, MenuButtons } from '../commons'
import { EmployeeFormState, EmployeeType } from './EmployeType'
import { FetchEmployess } from './hooks'
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

  FetchEmployess(setLoad, setEmployees)

  const submit = (data: EmployeeType) => {
    setFormState(EmployeeFormState)
    updateForm && setUpdateForm(false)
  }

  const editOnClick = () => {
    const employeeFiltered = employees.filter((e) => e.id === ids[0] && e)[0]
    !showForm && setShowForm(true)
    setFormState(employeeFiltered)
    setUpdateForm(true)
  }

  return (
    <Layout title="Funcionários">
      <>
        <MenuButtons
          totalIdsSelecteds={ids.length}
          newOnClick={() => setShowForm(showForm ? false : true)}
          editOnClick={editOnClick}
          removeOnClick={() => {}}
          backButton={showForm}
        />

        {showForm && (
          <Form
            handleSubmit={submit}
            formState={formState}
            update={updateForm}
          />
        )}

        <List setIds={setIds} ids={ids} employees={employees} load={load} />
      </>
    </Layout>
  )
}

export default Empolyees
