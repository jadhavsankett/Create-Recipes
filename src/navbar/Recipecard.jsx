import { Link } from "react-router-dom";

const Recipecard = (props) => {
    const {id, image , title , desc ,chef } = props.recipe;

  return (
    <div>
      <Link to={`/recipes/detail/${id}`} className="hover:scale-101 duration-150 block w-[20vw] overflow-hidden rounded shadow">
         <img className="object-cover w-full h-[25vh]" src={image} alt="" />
         <h1 className="px-2 mt-2 font-black">{title}</h1>
         <small className="px-2 text-red-500 capitalize">{chef}</small>
         <p className="px-2 pb-2">{desc.slice(0,100)}...<small className="text-blue-300">more</small></p>
      </Link>
    </div>
  )
}

export default Recipecard
