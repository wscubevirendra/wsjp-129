'use client'

import { fetchRecipeById } from '@/api-call/api'
import React, { use, useEffect, useState } from 'react'

export default  function page({ params }) {
    const [recipe, setRecipes] = useState({})
    const { recipe_id } = use(params)
  
    useEffect(
        () => {
            const getRecipe = async () => {
                const data = await fetchRecipeById(recipe_id)
                setRecipes(data)
            }

            getRecipe()

        },
        [recipe_id]
    )
    console.log(recipe)
    return (
        <div>page</div>
    )
}
