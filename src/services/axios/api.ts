import Http from "@/helpers/http"
import type { OrderType } from "@/types/main"

Http.defaults.timeout = 20000

const urlGetAllProducts = "/api/Project/getAllProduct"
const urlGetProductById = "/api/Project/getProductBy"
const urlGetAllDesigns = "/api/Project/all-designs"
const urlCreateOrder = "/api/Project/createOrder"

export const getAllProducts = (): Promise<any> => {
  const config = {
    header: {},
    params: {},
  }
  return Http.get(`${urlGetAllProducts}`, config)
}

export const getProductById = (id: string): Promise<any> => {
  const config = {
    header: {},
    params: {},
  }
  return Http.get(`${urlGetProductById}/${id}`, config)
}

export const getAllDesigns = (): Promise<any> => {
  const config = {
    header: {},
    params: {},
  }
  return Http.get(`${urlGetAllDesigns}`, config)
}

export const createOrder = (order: OrderType): Promise<any> => {
  const config = {
    header: {},
    params: {},
  }
  return Http.post(`${urlCreateOrder}`, order, config)
}
