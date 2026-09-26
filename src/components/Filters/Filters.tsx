import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import type { FiltersProps } from "../../types/product"
import styles from "./Filters.module.css"

const MAX_PRICE = 3900000
const formatPrice = (price: number) => price.toLocaleString("en-US")
const parsePrice = (value: string) => {
    const digits = value.replace(/\D/g, "")
    return digits === "" ? Number.NaN : Number(digits)
}

function Filters({ products, onFilterChange, onAuthRequired, isLoggedIn }: FiltersProps) {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([])

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(3900000)
    const [minPriceInput, setMinPriceInput] = useState("0")
    const [maxPriceInput, setMaxPriceInput] = useState(formatPrice(MAX_PRICE))

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

    const updateMinPrice = (value: string) => {
        const cleanValue = value.replace(/[^\d,]/g, "")
        setMinPriceInput(cleanValue)
        if (cleanValue === "") return

        const price = parsePrice(cleanValue)
        if (Number.isFinite(price)) {
            setMinPrice(Math.min(Math.max(price, 0), maxPrice))
        }
    }

    const updateMaxPrice = (value: string) => {
        const cleanValue = value.replace(/[^\d,]/g, "")
        setMaxPriceInput(cleanValue)
        if (cleanValue === "") return

        const price = parsePrice(cleanValue)
        if (Number.isFinite(price)) {
            setMaxPrice(Math.max(Math.min(price, MAX_PRICE), minPrice))
        }
    }

    const commitMinPrice = () => {
        const parsedPrice = parsePrice(minPriceInput)
        const price = Number.isFinite(parsedPrice) ? Math.min(Math.max(parsedPrice, 0), maxPrice) : minPrice
        setMinPrice(price)
        setMinPriceInput(formatPrice(price))
    }

    const commitMaxPrice = () => {
        const parsedPrice = parsePrice(maxPriceInput)
        const price = Number.isFinite(parsedPrice) ? Math.max(Math.min(parsedPrice, MAX_PRICE), minPrice) : maxPrice
        setMaxPrice(price)
        setMaxPriceInput(formatPrice(price))
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
                <div className={styles.priceInputs}>
                    <label className={styles.priceInputGroup}>
                        <span>$</span>
                        <input
                            className={styles.priceInput}
                            type="text"
                            inputMode="numeric"
                            aria-label="Minimum price"
                            value={minPriceInput}
                            onChange={(event) => {
                                if (!requireAuth()) return
                                updateMinPrice(event.target.value)
                            }}
                            onBlur={commitMinPrice}
                        />
                    </label>
                    <label className={styles.priceInputGroup}>
                        <span>$</span>
                        <input
                            className={styles.priceInput}
                            type="text"
                            inputMode="numeric"
                            aria-label="Maximum price"
                            value={maxPriceInput}
                            onChange={(event) => {
                                if (!requireAuth()) return
                                updateMaxPrice(event.target.value)
                            }}
                            onBlur={commitMaxPrice}
                        />
                    </label>
                </div>
                <div className={styles.priceSlider}>
                    <input
                        className={`${styles.range} ${styles.minRange}`}
                        type="range"
                        min={0}
                        max={maxPrice}
                        value={minPrice}
                        aria-label="Minimum price"
                        onChange={(event) => {
                            if (!requireAuth()) return
                            const price = Number(event.target.value)
                            setMinPrice(price)
                            setMinPriceInput(formatPrice(price))
                        }}
                    />

                    <input
                        className={`${styles.range} ${styles.maxRange}`}
                        type="range"
                        min={minPrice}
                        max={MAX_PRICE}
                        value={maxPrice}
                        aria-label="Maximum price"
                        onChange={(event) => {
                            if (!requireAuth()) return
                            const price = Number(event.target.value)
                            setMaxPrice(price)
                            setMaxPriceInput(formatPrice(price))
                        }}
                    />
                </div>
            </div>
        </section>
        </main>
    )
}

export default Filters