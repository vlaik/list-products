import Axios from 'axios'

export * from './endpoints'

export const URL = `https://api.jsonserver.io`

export const api = Axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Jsio-Token': '84a401cee834f1d8e7c66939a38709e4'
  }
})


const Apis = { api }
export default Apis
