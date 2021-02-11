import React from 'react'
import { Table, Form } from 'react-bootstrap'
import { EmployeeType } from '../types'

interface Props {
  employees: EmployeeType[]
  handleCheckBoxAll: () => void
  handleCheckBox: (id: string) => void
  checkBox: string[]
}

const EmployeeTable: React.FC<Props> = ({
  employees,
  handleCheckBoxAll,
  handleCheckBox,
  checkBox,
}) => (
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
                checked={
                  checkBox.indexOf(employee.id ? employee.id : '') === -1
                    ? false
                    : true
                }
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

export default EmployeeTable
