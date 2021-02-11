import { all } from 'redux-saga/effects'
import { EmployeeSaga } from '../components/Employees/redux'
export default function* combineSagas() {
  yield all([EmployeeSaga()])
}
