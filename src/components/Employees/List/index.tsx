import React from 'react'
import { isEmpty } from 'lodash'
import { EmployeeType } from '../EmployeType'
import { HttpClient } from '../../../services'
import EmployeeTable from './Table'
import { Load } from '../../commons'

interface Props {
  setIds: React.Dispatch<React.SetStateAction<string[]>>
  ids: string[]
}

const List: React.FC<Props> = ({ setIds, ids }) => {
  const [employees, setEmployees] = React.useState<EmployeeType[]>([])
  const [load, setLoad] = React.useState(false)
  const [checkBox, setCheckBox] = React.useState<string[]>([])

  React.useEffect(() => {
    setLoad(true)
    const fetchEmployees = async () => {
      const { data } = await HttpClient().get('empolyees')
      setEmployees(data)
    }
    fetchEmployees()
    setLoad(false)
  }, [])

  const handleCheckBoxAll = () => {
    let ids: string[] = []
    employees.map((e) => ids.push(e.id ? e.id : ''))
    if (isEmpty(checkBox)) {
      setCheckBox(ids)
      setIds(ids)
    } else {
      setIds([])
      setCheckBox([])
    }
  }

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

  return (
    <>
      {load ? (
        <Load />
      ) : (
        <EmployeeTable
          employees={employees}
          handleCheckBoxAll={handleCheckBoxAll}
          handleCheckBox={handleCheckBox}
          checkBox={checkBox}
        />
      )}
    </>
  )
}

export default List
