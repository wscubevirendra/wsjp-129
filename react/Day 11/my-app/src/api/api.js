async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json()
        const product = data.products
        return { data: product }

    } catch (error) {
        return { data: [] }

    }
}

export { getProducts }