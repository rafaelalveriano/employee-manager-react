import { action } from 'typesafe-actions'
import { ResponsibilitiesType, ResponsibilitiesActionMap } from '../types'

const ResponsibilitiesAction = {
  store: (data: ResponsibilitiesType) =>
    action(ResponsibilitiesActionMap.STORE, data),
  response: (status: boolean, data: any) =>
    action(ResponsibilitiesActionMap.RESPONSE, { status, data }),
  delete: (ids: string[]) => action(ResponsibilitiesActionMap.DELETE, ids),
  update: (data: ResponsibilitiesType) =>
    action(ResponsibilitiesActionMap.UPDATE, data),
}

export default ResponsibilitiesAction
