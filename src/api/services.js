export const fetchProducts = async (categoryId) => {
    const response = await fetch(`${window.location.origin}/data/productos.JSON`);
    const json = await response.json();

    return json.map((r) => ({
        ...r,
        imageSrc: `${window.location.origin}/${r.imageSrc}`
    })).filter(r => {
        return categoryId == undefined || r.categoryId == categoryId
    });
}

export const fetchProductById = async (id) => {
    const products = await fetchProducts(undefined);
    
    return products.find(r => r.id == id);
}