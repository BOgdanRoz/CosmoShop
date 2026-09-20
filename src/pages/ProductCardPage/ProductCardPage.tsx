import { useParams } from "react-router-dom"
import { products } from "../../types/product"

function ProductCardPage() {

    const { id } = useParams()

    const product = products.find(product => product.id === Number(id))

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <main>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>

            <button>Add to cart</button>
        </main>
    )
}

export default ProductCardPage