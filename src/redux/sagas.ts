import { all } from 'redux-saga/effects'
import { employeeSaga } from '../components/Employees/redux'
export default function* combineSagas() {
  yield all([employeeSaga()])
}
