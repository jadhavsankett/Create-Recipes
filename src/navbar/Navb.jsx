import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="flex justify-center items-center gap-5 font-bold text-gray-400">
            <NavLink 
            className={(e)=>e.isActive ?" text-gray-600" : " "}
            to={"/"}>Home</NavLink>

            <NavLink 
              className={(e)=> e.isActive ?" text-gray-600" : ""}
            to={"/recipes"}>Recipes</NavLink>

            <NavLink 
              className={(e)=>e.isActive ? "text-gray-600 ": ""}
            to={"/about"}>About</NavLink>

            <NavLink 
              className={(e)=>e.isActive ? "text-gray-600" : ""}
            to={"/create"}>Create Recipes</NavLink>

        </div>
    )
}

export default Nav
