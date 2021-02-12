import { all } from 'redux-saga/effects'
import { employeeSaga } from '../components/Employees/redux'
import { responsabilitySaga } from '../components/Responsibilities/redux'
export default function* combineSagas() {
  yield all([employeeSaga(), responsabilitySaga()])
}
