import { client } from "@/utils/helper"

export const fetchCategory = async () => {
    try {
        const response = await client.get("category");
        if (response.data.success) {
           return response.data
        }
    } catch (error) {
        return {
            data: [],
            success: false
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
