import type { CartItem } from "./product"

 export interface Order {
    id: number
    createdAt: string
    items: CartItem[]
    total: number
 }

 export interface MyOrdersPageProps {
    userName: string | null
 }