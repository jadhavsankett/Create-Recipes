import { Route, Routes } from "react-router-dom"
import Home from "../componets/Home"
import About from "../componets/About"
import Create from "../componets/Create"
import Recipes from "../componets/Recipes"
import SingleRecipe from "../componets/SingleRecipe"

const Mainrapper = () => {
  return (
    <div className="p-5">
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/recipes" element={<Recipes/>}/>
             <Route path="/recipes/detail/:id" element={<SingleRecipe/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/create" element={<Create/>}/>
         </Routes>
    </div>
  )
}

export default Mainrapper
