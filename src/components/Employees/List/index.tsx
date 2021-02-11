import React from 'react'
import { Table, Form } from 'react-bootstrap'
import { isEmpty } from 'lodash'
import { EmployeeType } from '../EmployeType'
import { HttpClient } from '../../../services'

interface Props {
  setIds: React.Dispatch<React.SetStateAction<string[]>>
  ids: string[]
}

const List: React.FC<Props> = ({ setIds, ids }) => {
  const [employees, setEmployees] = React.useState<EmployeeType[]>([])
  const [checkBox, setCheckBox] = React.useState<string[]>([])

  React.useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await HttpClient().get('empolyees')
      setEmployees(data)
    }
    fetchEmployees()
  }, [])

  const handleCheckBox = (id: string) => {
    setCheckBox(
      checkBox.indexOf(id) === -1
        ? [...checkBox, id]
        : checkBox.filter((i) => i !== id && i),
    )
    setIds(
      ids.indexOf(id) === -1 ? [...ids, id] : ids.filter((i) => i !== id && i),
    )
  }
  const handleCheckBoxAll = () => {
    let ids: string[] = []
    employees.map((e) => ids.push(e.id))
    if (isEmpty(checkBox)) {
      setCheckBox(ids)
      setIds(ids)
    } else {
      setIds([''])
      setCheckBox([])
    }
  }

  return (
    <Table striped bordered hover variant="dark" style={{ marginTop: 40 }}>
      <thead>
        <tr>
          <th>
            <Form.Check onChange={handleCheckBoxAll} />
          </th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Cargo</th>
          <th>Data de nasc.</th>
          <th>Salário</th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <Form.Check
                  checked={checkBox.indexOf(employee.id) === -1 ? false : true}
                  onChange={(e) => handleCheckBox(e.target.value)}
                  value={employee.id}
                />
              </td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.responsability}</td>
              <td>{employee.birthdata}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default List
