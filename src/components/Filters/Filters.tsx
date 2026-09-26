import { useEffect, useState } from "react"
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

    useEffect(() => {
        onFilterChange(filteredProducts)
    }, [selectedCategories, products, maxPrice, minPrice, searchName])

    return (
        <main>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.length === 0}
                        onChange={() => {
                            if (!requireAuth()) return
                            setSelectedCategories([])
                        }}   
                    />
                    All
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes("Food")}
                        onChange={() => {
                            if (!requireAuth()) return
                            setSelectedCategories(prev => 
                                prev.includes("Food")
                                ? prev.filter(category => category !== "Food")
                                : [...prev, "Food"]
                            )
                        }}
                    />
                    Food
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes("Vehicle")}
                        onChange={() => {
                            if (!requireAuth()) return
                            setSelectedCategories(prev => 
                                prev.includes("Vehicle")
                                ? prev.filter(category => category !== "Vehicle")
                                : [...prev, "Vehicle"]
                            )
                        }}
                    />
                    Vehicle
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes("Space Suits")}
                        onChange={() => {
                            if (!requireAuth()) return
                            setSelectedCategories(prev => 
                                prev.includes("Space Suits")
                                ? prev.filter(category => category !== "Space Suits")
                                : [...prev, "Space Suits"]
                            )
                        }}
                    />
                    Space Suits
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes("Equipment")}
                        onChange={() => {
                            if (!requireAuth()) return
                            setSelectedCategories(prev => 
                                prev.includes("Equipment")
                                ? prev.filter(category => category !== "Equipment")
                                : [...prev, "Equipment"]
                            )
                        }}
                    />
                    Equipment
                </label>
            </div>
            <div className={styles.priceSlider}>
                <input
                    className={styles.range}
                    type="range"
                    min={0}
                    max={3900000}
                    value={minPrice}
                    onChange={(event) => {
                        if (!requireAuth()) return
                        setMinPrice(Number(event.target.value))}}        
                    />

                    <input
                    className={styles.range}
                    type="range"
                    min={0}
                    max={3900000}
                    value={maxPrice}
                    onChange={(event) => {
                        if (!requireAuth()) return
                        setMaxPrice(Number(event.target.value))}}        
                    />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by name.."
                    value={searchName}
                    onChange={(event) => {
                        if (!requireAuth()) return
                        setSearchName(event.target.value)}}
                />
            </div>
        </main>
    )
}

export default Filters