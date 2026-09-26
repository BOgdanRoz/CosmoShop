import type { Product } from "../types/product"

export function getProductImage(product: Pick<Product, "id" | "image">): string {
    return product.image || `/products/${product.id}.svg`
}
