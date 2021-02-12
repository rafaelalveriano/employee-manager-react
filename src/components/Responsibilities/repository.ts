import { HttpClient } from '../../services'
import { ResponsibilitiesType } from './types'

const path = 'responsability'

const Repository = {
  list: async () => await HttpClient().get(path),
  post: async (data: ResponsibilitiesType) =>
    await HttpClient().post(path, data),
  remove: async (ids: string[]) => await HttpClient().remove(path, ids),
  update: async (data: ResponsibilitiesType) =>
    await HttpClient().update(`${path}/${data.id}`, data),
}

export default Repository
