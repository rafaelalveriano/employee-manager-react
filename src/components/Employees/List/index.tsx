import React from 'react'
import { Table } from 'react-bootstrap'

const List = () => {
  React.useEffect(() => {}, [])
  return (
    <Table striped bordered hover variant="dark" style={{ marginTop: 40 }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Cargo</th>
          <th>Data de nasc.</th>
          <th>Salário</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default List
