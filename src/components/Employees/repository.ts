import { HttpClient } from '../../services'
import { EmployeeType } from './types'

const path = 'employees'

const Repository = {
  list: async () => await HttpClient().get(path),
  post: async (employee: EmployeeType) =>
    await HttpClient().post(path, employee),
  remove: async (ids: string[]) => await HttpClient().remove(path, ids),
  update: async (employee: EmployeeType) =>
    await HttpClient().update(`${path}/${employee.id}`, employee),
}

export default Repository
