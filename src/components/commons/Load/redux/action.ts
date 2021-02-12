import { action } from 'typesafe-actions'
import { LoadActionMap } from '../types'

const LoadAction = {
  load: (status: boolean) => action(LoadActionMap.SHOW, { status }),
}

export default LoadAction
