import { action } from 'typesafe-actions'
import { EmployeeType, EmployeeActionMap } from '../types'

const EmployeeAction = {
  store: (data: EmployeeType) => action(EmployeeActionMap.STORE, data),
  response: (status: boolean, data: any) =>
    action(EmployeeActionMap.RESPONSE, { status, data }),
  delete: (ids: string[]) => action(EmployeeActionMap.DELETE, ids),
  update: (data: EmployeeType) => action(EmployeeActionMap.UPDATE, data),
}

export default EmployeeAction
