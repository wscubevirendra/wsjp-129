import { client } from "@/utils/helper"


export const fetchProducts = async ({ category, room, stock, min_price, max_price ,page} = {}) => {
    try {
        const params = new URLSearchParams();
        if (category != null) params.append("category", category);
        if (room != null) params.append("room", room);
        if (stock != null) params.append("stock", stock)
        if (page != null) params.append("page", page)

        if (min_price && max_price) {
            params.append("min_price", min_price)
            params.append("max_price", max_price)
        }

        const response = await client.get(`product?${params.toString()}`);
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: [],
            success: false,
            message: "Internal Server Error"
        }
    }
}


export const fetchProductById = async (id) => {
    try {
        const response = await client.get(`product/${id}`);
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: {},
            success: false,
            message: "Internal Server Error"
        }
    }
}

export const fetchCategory = async () => {
    try {
        const response = await client.get("category");
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: [],
            success: false,
            message: "Internal Server Error"
        }
    }
}


export const fetchCategoryById = async (id) => {
    try {
        const response = await client.get(`category/${id}`);
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: {},
            success: false
        }
    }
}


export const fetchRooms = async () => {
    try {
        const response = await client.get("room-type");
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: [],
            success: false,
            message: "Internal Server Error"
        }
    }
}


export const fetchRoomById = async (id) => {
    try {
        const response = await client.get(`room-type/${id}`);
        if (response.data.success) {
            return response.data
        }
    } catch (error) {
        return {
            data: {},
            success: false
        }
    }
}

