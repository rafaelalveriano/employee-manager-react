import {
  EmployeeFormState,
  EmployeeState,
  EmployeeActionType,
  EmployeeActionMap,
} from '../types'

const INIT_STATE: EmployeeState = {
  response: { data: EmployeeFormState, status: false },
}

const EmployeeReduce = (
  state: EmployeeState = INIT_STATE,
  action: EmployeeActionType,
) => {
  const { type, payload } = action

  switch (type) {
    case EmployeeActionMap.RESPONSE:
      return { ...state, response: payload }
    default:
      return state
  }
}

export default EmployeeReduce
