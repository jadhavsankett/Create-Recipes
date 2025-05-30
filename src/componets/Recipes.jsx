import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import Recipecard from "../navbar/Recipecard"

const Recipes = () => {
  const {data} = useContext(recipecontext)

  const recipehandler = data.map((recipe) => (
    <Recipecard key={recipe.id} recipe={recipe}/>
  ))

  return <div className="pt-5 flex flex-wrap gap-5">{data.length > 0 ? recipehandler : "No recipes found"}</div>
}

export default Recipes  
