import {
  getAllProducts,
  getAllDesigns,
  getProductById,
  createOrder,
} from "@/services/axios/api"
import type { OrderType } from "@/types/main"

export const useGetAllProducts = async () => {
  try {
    const response = await getAllProducts()
    const data = response.data.data
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export const useGetProductById = async (id: string) => {
  try {
    const response = await getProductById(id)
    const data = response.data.data
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export const useGetAllDesigns = async () => {
  try {
    const response = await getAllDesigns()
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}

export const useCreateOrder = async (order: OrderType) => {
  try {
    const response = await createOrder(order)
    return response.data
  } catch (e) {
    console.error(e)
    return null
  }
}
