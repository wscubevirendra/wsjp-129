import { client } from "@/utils/helper"


export const fetchProducts = async () => {
    try {
        const response = await client.get("product");
        if (response.data.success) {
           return response.data
        }
    } catch (error) {
        return {
            data: [],
            success: false,
            message:"Internal Server Error"
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
            message:"Internal Server Error"
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
            message:"Internal Server Error"
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
            message:"Internal Server Error"
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

