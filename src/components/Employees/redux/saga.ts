import { takeLatest, call, put } from 'redux-saga/effects'
import { EmployeeActionMap, EmployeeActionType, EmployeeType } from '../types'
import { AlertAction } from '../../commons/Alert/redux'
import { LoadAction } from '../../commons/Load/redux'
import repository from '../repository'
import EmployeeAction from './action'

interface EmployeeIdsActionType {
  type: string
  payload: []
}

const listInApi = async () => await repository.list()
const storeInApi = async (data: EmployeeType) => await repository.post(data)
const removeInApi = async (ids: []) => await repository.remove(ids)
const updateInApi = async (data: EmployeeType) => await repository.update(data)

const dispatch = (status: boolean, data: any = null) =>
  put(EmployeeAction.response(status, data))

const alertDispatch = (status: boolean, msg: string) =>
  put(AlertAction.status(status, msg))

const loadDispatch = (load: boolean) => put(LoadAction.load(load))

function* store(ac: EmployeeActionType) {
  const { payload } = ac
  yield loadDispatch(true)

  try {
    yield call(storeInApi, payload)
    const { data } = yield call(listInApi)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Adicionado com sucesso!')
  } catch (error) {
    yield alertDispatch(false, 'Error ao adicionar!')
  } finally {
    yield loadDispatch(false)
  }
}

function* remove(ac: EmployeeIdsActionType) {
  const { payload } = ac
  yield loadDispatch(true)
  try {
    yield call(removeInApi, payload)
    const { data } = yield call(listInApi)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Excluido com sucesso!')
  } catch (error) {
    yield alertDispatch(true, 'Error ao excluir o registro!')
  } finally {
    yield loadDispatch(false)
  }
}

function* update(ac: EmployeeActionType) {
  const { payload } = ac
  yield loadDispatch(true)

  try {
    yield call(updateInApi, payload)
    const { data } = yield call(listInApi)
    yield dispatch(true, data)
    yield alertDispatch(true, 'Alterado com sucesso!')
  } catch (error) {
    yield alertDispatch(false, 'Error ao alterar!')
  } finally {
    yield loadDispatch(false)
  }
}

export default function* observer() {
  yield takeLatest(EmployeeActionMap.STORE, store)
  yield takeLatest(EmployeeActionMap.DELETE, remove)
  yield takeLatest(EmployeeActionMap.UPDATE, update)
}
