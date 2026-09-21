import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage"
import type { CartItem, Product } from "./types/product"
import { useState } from "react"
import CartPage from "./pages/CartPage/CartPage"

function App() {

    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {

        const existingItem = cart.find(item => item.product.id === product.id)

        if (existingItem) {
            const smartCart = cart.map(item => (
                item.product.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            ))
            setCart(smartCart)
        } else {
            setCart([
                ...cart,
                {
                    product,
                    quantity: 1
                }
            ])
        }
    }

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage cart={cart} />} />
                <Route path="/products/:id" element={<ProductCardPage addToCart={addToCart} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App