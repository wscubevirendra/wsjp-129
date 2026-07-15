import axios from "axios"

export const fetchRecipes = async () => {
    try {
        const response = await axios.get("https://dummyjson.com/recipes");
        return {
            data: response.data.recipes
        }

    } catch (error) {
        return {
            data: []
        }

    }

}


export const fetchRecipeById = async (id) => {
    try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        return  response.data

    } catch (error) {
        return {
            data: {}
        }

    }

}