export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export type DesignType = {
  projectId: number
  designerId: number
  filePath: string
  designTime: string
  designStatus: string
  approverId: number
  id: number
}

export type SortOptionType = {
  name: string
  value: string
  sort: Function
}

export type OrderType = {
  productID: number
  designID: number
  orderDate: Date
  status: string
  deliveryAddress: string
  phoneNumber: string
  customerID: number
  customerName: string
}
