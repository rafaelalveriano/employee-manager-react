import { action } from 'typesafe-actions'
import { EmployeeType, EmployeeActionMap } from '../types'

const EmployeeAction = {
  store: (data: EmployeeType) => action(EmployeeActionMap.STORE, data),
}

export default EmployeeAction
