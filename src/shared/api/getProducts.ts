import { AxiosPromise } from 'axios'
import Apis, { endpoints } from './index'

export const getProducts = (): AxiosPromise => {
  return Apis.api.get(`${endpoints.products}?limit=10`)
}