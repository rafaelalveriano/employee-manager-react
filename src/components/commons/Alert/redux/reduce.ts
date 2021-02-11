import { AlertState, AlertActionType, AlertActionMap } from '../types'

const INIT_STATE: AlertState = {
  alert: { status: false, msg: '' },
}

const EmployeeReduce = (
  state: AlertState = INIT_STATE,
  action: AlertActionType,
) => {
  const { type, payload } = action

  switch (type) {
    case AlertActionMap.SHOW:
      return { ...state, alert: payload }
    default:
      return state
  }
}

export default EmployeeReduce
