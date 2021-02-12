export interface LoadType {
  status: boolean
}
export interface LoadState {
  load: LoadType
}

export enum LoadActionMap {
  SHOW = '@redux/LOAD_SHOW',
}

export interface LoadActionType {
  type: string
  payload: LoadState
}

export interface LoadReducer {
  load: LoadState
}
