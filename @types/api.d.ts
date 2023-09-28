import apiRoutes from "../src/api/api-routes";

export type RouteProps = keyof typeof apiRoutes;

export type IProduct = {
    id: string,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string
}

export type IProducts = IProduct[]

export type ICategory = string[]