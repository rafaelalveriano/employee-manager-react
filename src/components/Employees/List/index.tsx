import React from 'react'
import { isEmpty } from 'lodash'
import { EmployeeType } from '../types'
import EmployeeTable from './Table'
import { Load } from '../../commons'

interface Props {
  setIds: React.Dispatch<React.SetStateAction<string[]>>
  ids: string[]
  employees: EmployeeType[]
  load: boolean
}

const List: React.FC<Props> = ({ setIds, ids, employees, load }) => {
  const [checkBox, setCheckBox] = React.useState<string[]>([])

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
