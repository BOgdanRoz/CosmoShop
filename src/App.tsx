import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage"
import type { CartItem, Product } from "./types/product"
import { useState, useEffect } from "react"
import CartPage from "./pages/CartPage/CartPage"
import AuthModal from "./components/AuthModal/AuthModal"
import type { User } from "./types/auth"
import type { Order } from "./types/order"
import MyOrdersPage from "./pages/MyOrdersPage/MyOrdersPage"

function App() {

    const [modalType, setModalType] = useState<"register" | "login" | null>(null)

    const [userName, setUserName] = useState<string | null>(() => {
        return localStorage.getItem("userName")
    })

    const [users, setUsers] = useState<User[]>(() => {
        const usersJSON = localStorage.getItem("users")

         if (usersJSON) {
            return JSON.parse(usersJSON)
         } else {
            return []
         }
    })

    const handleLogout = () => {
        setUserName(null)
        setCart([])
        localStorage.removeItem("userName")
    }

    const handleRegister = () => {
        setModalType("register")
    }

    const handleLogin = () => {
        setModalType("login")
    }

    const handleSubmit = (userName: string, password: string) => {
        if (modalType === "register") {
            const exsitingUser = users.some(user => user.userName === userName)
            if (exsitingUser) {
                return "This username is already taken."
            }

            const newUser = {
                userName: userName,
                password: password
            }

            setUsers([
                ...users,
                newUser
            ])
            setModalType("login")
            return null
        } else if (modalType === "login") {
            const existingUser = users.find(user => user.userName === userName)
            if (!existingUser) {
                return "Account not found."
            }
            if (existingUser.password !== password) {
                return "Incorrect password."
            }

            setUserName(userName)
            const savedCart = localStorage.getItem(`cart_${userName}`)
            setCart(savedCart ? JSON.parse(savedCart) :  [])
            localStorage.setItem("userName", userName)

            setModalType(null)
        }
        return null
    }

    const [cart, setCart] = useState<CartItem[]>(() => {
        if (userName === null) return []

        const savedCart = localStorage.getItem(`cart_${userName}`)
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        if (userName === null) return 

        localStorage.setItem(`cart_${userName}`, JSON.stringify(cart))
    }, [cart, userName])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    const addToCart = (product: Product) => {

        if (userName === null) {
            setModalType("login")
            return false
        } else {
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
        return true
    }

    const increaseQuantity = (productId: number) => {
        const smartCart = cart.map(item => (
            item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity + 1
            }
            : item
        ))

        setCart(smartCart)
    }

    const decreaseQuantity = (productId: number) => {
        const smartCart = cart
            .filter(item => !(item.product.id === productId && item.quantity === 1))
            .map(item => 
                item.product.id === productId
                ? {
                    ...item,
                    quantity: item.quantity - 1
                }
                : item
            )

        setCart(smartCart)
    }

    const handleCheckout = () => {
        if (userName === null || cart.length === 0) return

        const newOrder: Order = {
            id: Date.now(),
            createdAt: new Date().toISOString(),
            items: [...cart],
            total: cart.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
            )
        }

        const savedOrders = localStorage.getItem(`orders_${userName}`)
        const orders: Order[] = savedOrders ? JSON.parse(savedOrders) : []

        localStorage.setItem(
            `orders_${userName}`,
            JSON.stringify([...orders, newOrder])
        )
        setCart([])
    }

    return (
        <>
        {modalType &&
            <AuthModal
                key={modalType}
                modalType={modalType}
                onSubmit={handleSubmit}
                onClose={() => setModalType(null)}
                onSwitchMode={() => setModalType(modalType === "register" ? "login" : "register")}
            />
            
            }
        <BrowserRouter>
            <Header
                userName={userName}
                onRegister={handleRegister}
                onLogin={handleLogin}
                onLogout={handleLogout}
                />

            <Routes>
                <Route
                    path="/" 
                    element={<ProductsPage
                        isLoggedIn={userName !== null}
                        onAuthRequired={handleLogin}
                    />} />
                <Route
                    path="/cart"
                    element={<CartPage
                        cart={cart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        onCheckout={handleCheckout}
                />} />
                <Route path="/products/:id" element={<ProductCardPage addToCart={addToCart} />}/>
                <Route path="/my-orders" element={<MyOrdersPage userName={userName}/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App