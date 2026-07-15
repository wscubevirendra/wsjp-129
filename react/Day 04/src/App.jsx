import { useState } from "react";
import RecipeCard from "./RecipeCard";



export default function App() {
  const [recipes, setRecipes] = useState([
    {
      name: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
      name: "Chocolate Chip",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp"
    },
    {
      name: "Shrimp Scampi Pasta",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp"
    },
    {
      name: "Shrimp Scampi Pasta",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp"
    },
    {
      name: "Shrimp Scampi Pasta",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp"
    },
 
  ])

  return (
    <div className="container py-5">

      <div className="row g-4">

        {
          recipes.map((data, index) => {
            return (
              <RecipeCard key={index} name={data.name} image={data.image} />
            )
          })
        }

      </div>

    </div>
  );
}