import { HttpClient } from '../../services'
import { EmployeeType } from './types'

const path = 'employees'

export default {
  list: async () => await HttpClient().get(path),
  post: async (employee: EmployeeType) =>
    await HttpClient().post(path, employee),
}
