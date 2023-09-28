const BASE_URL = 'https://fakestoreapi.com';

const apiRoutes = {
    BASE : BASE_URL,
    CATEGORIES: `${BASE_URL}/products/categories`,
    PRODUCTS: `${BASE_URL}/products`,
    SINGLE_PRODUCT: (id: string) => `${BASE_URL}/products/${id}`,
    CATEGORY: (id: string) => `${BASE_URL}/products/category/${id}`,

}

export default apiRoutes;