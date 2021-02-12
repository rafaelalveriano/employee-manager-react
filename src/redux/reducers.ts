import { combineReducers } from 'redux'
import { employeeReduce } from '../components/Employees/redux'
import { responsabilityReduce } from '../components/Responsibilities/redux'
import { AlertReduce } from '../components/commons/Alert/redux'
import { LoadReduce } from '../components/commons/Load/redux'

export default combineReducers({
  employees: employeeReduce,
  responsability: responsabilityReduce,
  alert: AlertReduce,
  load: LoadReduce,
})
