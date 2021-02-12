import { takeLatest, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { EmployeeActionMap, EmployeeActionType, EmployeeType } from '../types'
import { AlertAction } from '../../commons/Alert/redux'
import repository from '../repository'
import EmployeeAction from './action'

interface EmployeeIdsActionType {
  type: string
  payload: []
}

const storeInApi = async (data: EmployeeType) => await repository.post(data)
const removeInApi = async (ids: []) => await repository.remove(ids)
const updateInApi = async (data: EmployeeType) => await repository.update(data)

const dispatch = (status: boolean, data: any = null) =>
  put(EmployeeAction.response(status, data))

const alertDispatch = (status: boolean, msg: string) =>
  put(AlertAction.status(status, msg))

function* store(ac: EmployeeActionType) {
  const { payload } = ac

  try {
    const { data }: AxiosResponse = yield call(storeInApi, payload)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Adicionado com sucesso!')
  } catch (error) {
    yield alertDispatch(false, 'Error ao adicionar!')
  }
}

function* remove(ac: EmployeeIdsActionType) {
  const { payload } = ac
  try {
    yield call(removeInApi, payload)
    yield alertDispatch(true, 'Excluido com sucesso!')
  } catch (error) {
    yield alertDispatch(true, 'Error ao excluir o registro!')
  }
}

function* update(ac: EmployeeActionType) {
  const { payload } = ac

  try {
    const { data }: AxiosResponse = yield call(updateInApi, payload)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Alterado com sucesso!')
  } catch (error) {
    yield alertDispatch(false, 'Error ao alterar!')
  }
}

export default function* observer() {
  yield takeLatest(EmployeeActionMap.STORE, store)
  yield takeLatest(EmployeeActionMap.DELETE, remove)
  yield takeLatest(EmployeeActionMap.UPDATE, update)
}
