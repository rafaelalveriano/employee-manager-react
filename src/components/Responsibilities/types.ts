export interface ResponsibilitiesType {
  id?: string
  description: string
}

export const ResponsibilitiesFormState = {
  description: '',
}

export interface ResponsibilitiesState {
  response: { data?: any; status: boolean }
}

export interface ResponsibilitiesActionType {
  type: string
  payload: ResponsibilitiesType
}

export enum ResponsibilitiesActionMap {
  LIST = '@redux/RESPONSIBILITIES_LIST',
  STORE = '@redux/RESPONSIBILITIES_STORE',
  UPDATE = '@redux/RESPONSIBILITIES_UPDATE',
  DELETE = '@redux/RESPONSIBILITIES_DELETE',
  RESPONSE = '@redux/RESPONSIBILITIES_RESPONSE',
}
