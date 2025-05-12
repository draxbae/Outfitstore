export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes: string[]
  isNew?: boolean
}

export interface CartItem extends Product {
  size: string
  quantity: number
}
