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
