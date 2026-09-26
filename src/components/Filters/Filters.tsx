import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import type { FiltersProps } from "../../types/product"
import styles from "./Filters.module.css"


function Filters({ products, onFilterChange, onAuthRequired, isLoggedIn }: FiltersProps) {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(3900000)

    const [searchName, setSearchName] = useState("")

    const requireAuth = () => {
        if (!isLoggedIn) {
            onAuthRequired()
            return false
        } else {
            return true
        }
    }

    const filteredProducts = products.filter(product =>
            (selectedCategories.length === 0 || selectedCategories.includes(product.category))
            && product.price >= minPrice && product.price <= maxPrice
            && product.name.toLowerCase().includes(searchName.toLowerCase().trim()
        ))

    const toggleCategory = (category: string) => {
        if (!requireAuth()) return

        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(selectedCategory => selectedCategory !== category)
                : [...prev, category]
        )
    }

    useEffect(() => {
        onFilterChange(filteredProducts)
    }, [selectedCategories, products, maxPrice, minPrice, searchName])

    return (
        <main className={styles.filters}>
        <section className={styles.panel} aria-labelledby="filters-title">
            <h2 className={styles.title} id="filters-title">Filters</h2>

            <div className={styles.search}>
                <FaSearch className={styles.searchIcon} aria-hidden="true" />
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search by name.."
                    aria-label="Search products"
                    value={searchName}
                    onChange={(event) => {
                        if (!requireAuth()) return
                        setSearchName(event.target.value)}}
                />
            </div>

            <div className={styles.categories}>
                <h2 className={styles.categoryTitle}>Pick Category</h2>
                {["Equipment", "Food", "Vehicle", "Space Suits"].map(category => (
                    <label className={styles.category} key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                        />
                        <span>{category}</span>
                    </label>
                ))}
            </div>

            <div className={styles.priceFilter}>
                <h3 className={styles.priceTitle}>Price</h3>
                <div className={styles.priceLabels}>
                    <span>${minPrice.toLocaleString("en-US")}</span>
                    <span>${maxPrice.toLocaleString("en-US")}</span>
                </div>
                <div className={styles.priceSlider}>
                    <input
                        className={`${styles.range} ${styles.minRange}`}
                        type="range"
                        min={0}
                        max={3900000}
                        value={minPrice}
                        aria-label="Minimum price"
                        onChange={(event) => {
                            if (!requireAuth()) return
                            setMinPrice(Number(event.target.value))}}
                    />

                    <input
                        className={`${styles.range} ${styles.maxRange}`}
                        type="range"
                        min={0}
                        max={3900000}
                        value={maxPrice}
                        aria-label="Maximum price"
                        onChange={(event) => {
                            if (!requireAuth()) return
                            setMaxPrice(Number(event.target.value))}}
                    />
                </div>
            </div>
        </section>
        </main>
    )
}

export default Filters