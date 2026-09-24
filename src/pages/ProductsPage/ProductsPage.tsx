import type { Product } from "../../types/product"
import { products } from "../../types/product"
import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./ProductsPage.module.css"
import { useState } from "react"
import Filters from "../../components/Filters/Filters"

function ProductsPage() {

    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 20
    const startIndex = (currentPage - 1) * productPerPage
    const endIndex = startIndex + productPerPage
    const currentProducts = filteredProducts.slice(startIndex, endIndex)
    const totalPages = Math.ceil(filteredProducts.length / productPerPage)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    

    const handleFilterChange = (filteredProducts: Product[]) => {
        setFilteredProducts(filteredProducts)
    }

    return (
        <main className={styles.page}>
            <div className={styles.contentLayout}>
                <aside className={styles.filters}>
                    <Filters products={products} onFilterChange={handleFilterChange} />
                </aside>

                <div className={styles.catalog}>
                <div className={styles.imageBanner}>
                    <img src="/Banner.png" alt="" className={styles.img} />
                </div>
                <div className={styles.grid}>
                    {currentProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
                <div className={styles.pagination}>
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
                </div>
            </div>
        </main>
    )
}

export default ProductsPage