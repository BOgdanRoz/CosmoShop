import { products } from "../../types/product"
import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./ProductsPage.module.css"
import { useState } from "react"

function ProductsPage() {

    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 20
    const startIndex = (currentPage - 1) * productPerPage
    const endIndex = startIndex + productPerPage
    const currentProducts = products.slice(startIndex, endIndex)
    const totalPages = Math.ceil(products.length / productPerPage)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
        <main className={styles.page}>
            <div className={styles.imageBanner}>
                <img src="./public/Banner.png" alt="" className={styles.img} />
            </div>
            <div className={styles.grid}>
                {currentProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            <div>
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() =>  {
                            setCurrentPage(page)
                            window.scrollTo(0, 0)
                        }}    
                    >
                        {page}
                    </button>
                ))}
            </div>
        </main>
    )
}

export default ProductsPage