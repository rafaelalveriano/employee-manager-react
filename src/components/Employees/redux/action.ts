import { action } from 'typesafe-actions'
import { EmployeeType, EmployeeActionMap } from '../types'

const EmployeeAction = {
  store: (data: EmployeeType) => action(EmployeeActionMap.STORE, data),
  response: (status: boolean, data: any) =>
    action(EmployeeActionMap.RESPONSE, { status, data }),
}

export default EmployeeAction
