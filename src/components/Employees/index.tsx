import React from 'react'
import { Layout, MenuButtons } from '../commons'
import { EmployeeFormState, EmployeeType } from './EmployeType'
import Form from './Form'
import List from './List'

const Empolyees = () => {
  const [ids, setIds] = React.useState<string[]>([])
  const [showForm, setShowForm] = React.useState(true)
  const [updateForm, setUpdateForm] = React.useState(false)
  const [formState, setFormState] = React.useState<EmployeeType>(
    EmployeeFormState,
  )

  const submit = (data: EmployeeType) => {}

  return (
    <Layout title="Funcionários">
      <>
        <MenuButtons
          totalIdsSelecteds={ids.length}
          newOnClick={() => setShowForm(showForm ? false : true)}
          editOnClick={() => {}}
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

        <List setIds={setIds} ids={ids} />
      </>
    </Layout>
  )
}

export default Empolyees
