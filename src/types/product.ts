
export interface Product {
    name: string
    price: number
    category: "Space Suits" | "Equipment" | "Food" | "Vehicle"
    rating: number
    image: string
    desc: string
    specifications: string[]
    id: number
}

export interface ProductCardProps {
    product: Product
}

export interface CartItem {
    product: Product
    quantity: number
}

export interface ProductCardPageProps {
    addToCart: (product: Product) => boolean
}

export interface CartPageProps {
    cart: CartItem[]
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    onCheckout: () => void
}

export interface ProductsPageProps {
    isLoggedIn: boolean
    onAuthRequired: () => void
}

export interface FiltersProps {
    products: Product[]
    onFilterChange: (products: Product[]) => void
    isLoggedIn: boolean
    onAuthRequired: () => void
}