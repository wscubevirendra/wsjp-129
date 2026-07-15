import { fetchRecipes } from '@/api-call/api'
import RecipeCard from '@/components/RecipeCard';
import React from 'react'

export default async function page() {
  const { data } = await fetchRecipes();
  console.log(data)
  return (
    <div className=' grid grid-cols-4 gap-4'>
      {
        data.map((recipe) => {
          return <RecipeCard  key={recipe.id} recipe={recipe} />
        })
      }

    </div>
  )
}
