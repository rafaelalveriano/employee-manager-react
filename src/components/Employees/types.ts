export interface EmployeeType {
  id?: string | undefined
  firstName: string
  lastName: string
  responsability: string
  birthdata: string
  salary: string
}

export const EmployeeFormState: EmployeeType = {
  firstName: '',
  lastName: '',
  responsability: '',
  birthdata: '',
  salary: '',
}

export enum EmployeeActionMap {
  LIST = '@redux/EMPLOYEE_LIST',
  STORE = '@redux/EMPLOYEE_STORE',
  UPDATE = '@redux/EMPLOYEE_UPDATE',
  RESPONSE = '@redux/EMPLOYEE_RESPONSE',
}

export interface EmployeeState {
  response: { data?: any; status: boolean }
}

export interface EmployeeActionType {
  type: string
  payload: EmployeeType
}
