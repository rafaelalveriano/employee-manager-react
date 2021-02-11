import { combineReducers } from 'redux'
import { EmployeeReduce } from '../components/Employees/redux'

export default combineReducers({
  employees: EmployeeReduce,
})
