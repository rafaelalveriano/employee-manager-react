import {
  ResponsibilitiesFormState,
  ResponsibilitiesState,
  ResponsibilitiesActionType,
  ResponsibilitiesActionMap,
} from '../types'

const INIT_STATE: ResponsibilitiesState = {
  response: { data: ResponsibilitiesFormState, status: false },
}

const ResponsibilitiesReduce = (
  state: ResponsibilitiesState = INIT_STATE,
  action: ResponsibilitiesActionType,
) => {
  const { type, payload } = action

  switch (type) {
    case ResponsibilitiesActionMap.RESPONSE:
      return { ...state, response: payload }
    default:
      return state
  }
}

export default ResponsibilitiesReduce
