import React from 'react'
import { HttpClient } from '../../services'
import { EmployeeType } from './EmployeType'

export const FetchEmployess = (
  setLoad: React.Dispatch<React.SetStateAction<boolean>>,
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeType[]>>,
) => {
  React.useEffect(() => {
    let isMounted = true
    setLoad(true)
    const fetch = async () => {
      const { data } = await HttpClient().get('employees')
      console.log(data)
      isMounted && setEmployees(data)
    }
    fetch()
    setLoad(false)
    return () => {
      isMounted = false
    }
  }, [setEmployees, setLoad])
}
