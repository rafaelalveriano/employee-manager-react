import React from 'react'
import { useSelector } from 'react-redux'
import { HttpClient } from '../../services'
import { EmployeeType, EmployeeReducer, EmployeeState } from './types'

export const FetchEmployess = (
  setLoad: React.Dispatch<React.SetStateAction<boolean>>,
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeType[]>>,
) => {
  React.useEffect(() => {
    let isMounted = true
    setLoad(true)
    const fetch = async () => {
      const { data } = await HttpClient().get('employees')
      isMounted && setEmployees(data)
    }
    fetch()
    setLoad(false)
    return () => {
      isMounted = false
    }
  }, [setEmployees, setLoad])
}

export const AddNewEmployeeInTable = (
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeType[]>>,
  initEmployees: EmployeeType[],
) => {
  const { response } = useSelector<EmployeeReducer, EmployeeState>(
    (state) => state.employees,
  )

  React.useEffect(() => {
    setEmployees(initEmployees)
    response.status && setEmployees(response.data)
  }, [initEmployees, setEmployees, response])
}
