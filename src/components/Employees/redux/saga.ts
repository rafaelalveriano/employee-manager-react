import { takeLatest, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { EmployeeActionMap, EmployeeActionType, EmployeeType } from '../types'
import { AlertAction } from '../../commons/Alert/redux'
import repository from '../repository'
import EmployeeAction from './action'

const storeInApi = async (data: EmployeeType) => await repository.post(data)

function* store(ac: EmployeeActionType) {
  const { payload } = ac

  const dispatch = (status: boolean, data: any = null) =>
    put(EmployeeAction.response(status, data))

  const alertDispatch = (status: boolean, msg: string) =>
    put(AlertAction.status(status, msg))

  try {
    const { data }: AxiosResponse = yield call(storeInApi, payload)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Adicionado com sucesso!')
  } catch (error) {
    yield alertDispatch(false, 'Error ao adicionar!')
  }
}

export default function* observer() {
  yield takeLatest(EmployeeActionMap.STORE, store)
}
