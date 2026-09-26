import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage"
import type { CartItem, Product } from "./types/product"
import { useState, useEffect } from "react"
import CartPage from "./pages/CartPage/CartPage"
import AuthModal from "./components/AuthModal/AuthModal"
import type { User } from "./types/auth"

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
                 return console.log("User, is already exist")
            }

            const newUser = {
                userName: userName,
                password: password
            }

            setUsers([
                ...users,
                newUser
            ])
        } else if (modalType === "login") {
            const exsitingUser = users.find(user => user.userName === userName && user.password === password)
            if (!exsitingUser) {
                return console.log("User, not found")
            }

            setUserName(userName)
            localStorage.setItem("userName", userName)

            setModalType(null)
        }
    }

    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
             return JSON.parse(savedCart)
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

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

    return (
        <>
        {modalType &&
            <AuthModal
                modalType={modalType}
                onSubmit={handleSubmit}
                onClose={() => setModalType(null)}
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
                />} />
                <Route path="/products/:id" element={<ProductCardPage addToCart={addToCart} />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App