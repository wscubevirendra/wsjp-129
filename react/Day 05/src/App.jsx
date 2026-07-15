import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function App() {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes)
  }

  useEffect(
    () => {
      fetchRecipes()
    },
    []
  )

  return (
    <div className='container-xl'>
      <div className='row'>
        {
          recipes.map((data,index)=>{
            return(
        <RecipeCard key={index} name={data.name} image={data.image}/>

            )
          })
        }
      </div>
    </div>
  )
}
