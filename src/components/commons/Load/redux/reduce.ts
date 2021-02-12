import { LoadState, LoadActionType, LoadActionMap } from '../types'

const INIT_STATE: LoadState = {
  load: { status: false },
}

const LoadReduce = (state: LoadState = INIT_STATE, action: LoadActionType) => {
  const { type, payload } = action

  switch (type) {
    case LoadActionMap.SHOW:
      return { ...state, load: payload }
    default:
      return state
  }
}

export default LoadReduce
