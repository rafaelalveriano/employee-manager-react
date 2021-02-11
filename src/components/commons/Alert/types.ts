export interface AlertType {
  status: boolean
  msg: string
}
export interface AlertState {
  alert: AlertType
}

export enum AlertActionMap {
  SHOW = '@redux/ALERT_SHOW',
}

export interface AlertActionType {
  type: string
  payload: AlertState
}

export interface AlertReducer {
  alert: AlertState
}
