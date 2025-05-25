import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"

const Recipes = () => {
  const [data] = useContext(recipecontext)

  const recipehandler = data.map(recipe=>{
    return <li key={recipe.id}>{recipe.name}{recipe.Title}</li>
  })

  return (
    <div>
      <h3>{recipehandler}</h3>
    </div>
  )
}

export default Recipes
