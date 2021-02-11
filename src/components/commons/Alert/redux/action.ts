import { action } from 'typesafe-actions'
import { AlertActionMap } from '../types'

const AlertAction = {
  status: (status: boolean, msg: string) =>
    action(AlertActionMap.SHOW, { status, msg }),
}

export default AlertAction
