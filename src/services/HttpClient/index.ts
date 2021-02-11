import axios from 'axios'
import header from './Header'

const HOSTAPI = 'https://sanfir.herokuapp.com/api/'

const HttpClient = (url?: string) => ({
  get: async (path: string) =>
    await axios.get(url ? `${url}${path}` : `${HOSTAPI}${path}`),

  post: async (path: string, data: any) =>
    await axios.post(url ? `${url}${path}` : `${HOSTAPI}${path}`, data),

  remove: async (path: string, data: any) =>
    await axios.delete(url ? `${url}${path}` : `${HOSTAPI}${path}`, {
      headers: header,
      data,
    }),

  update: async (path: string, data: any) =>
    await axios.put(url ? `${url}${path}` : `${HOSTAPI}${path}`, data),
})

export default HttpClient
