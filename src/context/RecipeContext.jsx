import { createContext, useState } from "react"

export const recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [data , setdata] = useState([])
    console.log(data)
  return (
    <div >
      <recipecontext.Provider value={[data , setdata]}>{props.children}</recipecontext.Provider>
    </div>
  )
}

export default RecipeContext
