import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage"

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<h1>Cart</h1>} />
                <Route path="/products/:id" element={<ProductCardPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App