
export interface Product {
    name: string
    price: number
    category: "Space Suits" | "Equipment" | "Food" | "Vehicle"
    rating: number
    image: string
    desc: string
    id: number
}

export interface ProductCardProps {
    product: Product
}

export const products: Product[] = [
    {
        name: "Moon Rover",
        price: 600000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A compact exploration rover designed for lunar missions.\nBuilt for rough terrain and long-distance exploration.\nIncludes reinforced wheels and a built-in navigation system.",
        id: 1
    },
    {
        name: "Spacesuit",
        price: 120000,
        category: "Space Suits",
        rating: 6,
        image: "",
        desc: "A reliable spacesuit designed for everyday orbital missions.\nProvides protection from extreme temperatures and low pressure.\nIncludes oxygen support and basic communication equipment.",
        id: 2
    },
    {
        name: "Liquid potato",
        price: 200,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A convenient liquid meal made from specially processed potatoes.\nEasy to store, prepare and consume in zero-gravity conditions.\nA popular choice among long-duration space crews.",
        id: 3
    },
    {
        name: "Cosmo Torch",
        price: 150,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A compact high-powered torch designed for spacecraft and exploration.\nProvides bright illumination in dark environments and damaged stations.\nFeatures a durable body and extended battery life.",
        id: 4
    },
]

export interface CartItem {
    product: Product
    quantity: number
}

export interface ProductCardPageProps {
    addToCart: (product: Product) => void
}

export interface CartPageProps {
    cart: CartItem[]
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
}