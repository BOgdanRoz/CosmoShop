export interface Product {
    name: string
    price: number
    category: "Space Suits" | "Equipment" | "Food" | "Vehicle"
    rating: number
    image: string
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
        id: 1
    },
    {
        name: "Spacesuit",
        price: 120000,
        category: "Space Suits",
        rating: 6,
        image: "",
        id: 2
    },
    {
        name: "Liquid potato",
        price: 200,
        category: "Food",
        rating: 7,
        image: "",
        id: 3
    },
    {
        name: "Cosmo Torch",
        price: 150,
        category: "Equipment",
        rating: 9,
        image: "",
        id: 4
    },
]