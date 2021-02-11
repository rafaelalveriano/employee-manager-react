import { takeLatest, call, put } from 'redux-saga/effects'
import { EmployeeActionMap, EmployeeActionType } from '../types'

function* store(ac: EmployeeActionType) {
  const { payload } = ac
  yield console.log(payload)
}

export default function* observer() {
  yield takeLatest(EmployeeActionMap.STORE, store)
}
