import { takeLatest, call, put } from 'redux-saga/effects'
import {
  ResponsibilitiesActionMap,
  ResponsibilitiesActionType,
  ResponsibilitiesType,
} from '../types'
import { AlertAction } from '../../commons/Alert/redux'
import { LoadAction } from '../../commons/Load/redux'
import repository from '../repository'
import ResponsabilityAction from './action'

interface EmployeeIdsActionType {
  type: string
  payload: []
}

const listInApi = async () => await repository.list()
const storeInApi = async (data: ResponsibilitiesType) =>
  await repository.post(data)
const removeInApi = async (ids: []) => await repository.remove(ids)
const updateInApi = async (data: ResponsibilitiesType) =>
  await repository.update(data)

const dispatch = (status: boolean, data: any = null) =>
  put(ResponsabilityAction.response(status, data))

const alertDispatch = (status: boolean, msg: string) =>
  put(AlertAction.status(status, msg))

const loadDispatch = (load: boolean) => put(LoadAction.load(load))

function* store(ac: ResponsibilitiesActionType) {
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

function* update(ac: ResponsibilitiesActionType) {
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
  yield takeLatest(ResponsibilitiesActionMap.STORE, store)
  yield takeLatest(ResponsibilitiesActionMap.DELETE, remove)
  yield takeLatest(ResponsibilitiesActionMap.UPDATE, update)
}
