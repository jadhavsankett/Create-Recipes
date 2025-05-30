import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipe = () => {
  const {data, setdata} = useContext(recipecontext)
  const navigate = useNavigate()
  const params = useParams()
  const recipe = data.find((recipe) => String(recipe.id) === String(params.id))

  const { register, handleSubmit, reset } = useForm({
    defaultValues:{
      title : recipe.title,
      chef : recipe.name,
      image : recipe.image,
    }
  });

  const Submithandler = (recipe) => {
    const index = data.findIndex((recipe) => String(recipe.id) === String(params.id));
    const copydata = [...data]
    copydata[index] = {...copydata[index],...recipe};
     setdata(copydata);
     toast.success("Recipee update..");
  }
 
  // console.log(data,params.id,'anubhaw');

  if (!data) return <div>Loading data...</div>
  
  if (!recipe) return <div>Recipe not found</div>


  const deletehandler=()=>{
      const filterdata = data.filter((r)=> r.id != params.id);
      setdata(filterdata);
      toast.error("Recipe deleted..");
      navigate("/recipes");
  }


  return (
    <div className="w-full flex">

      <div className="left w-1/2 p-2">
       <h1 className="text-5xl font-black">{recipe.title}</h1>
       <img className="w-70 pt-5" src={recipe.image} alt="" />
       </div>

       <form className="w-1/2 p-2" onSubmit={handleSubmit(Submithandler)}>

        <input
          className="block border-b outline-0 p-2 w-full"
          {...register("Image")}
          type="url"
          placeholder="Enter Image Url.." />

        <input
          className="block border-b outline-0 p-2 w-full"
          {...register("name")}
          type="text"
          placeholder="Chef Name" />

        <input
          className="block border-b outline-0 p-2 w-full"
          {...register("Title")}
          type="text"
          placeholder="Recipe Title" />

        <textarea
          className="block border-b outline-0 p-2 w-full h-20"
          {...register("desc")}
          placeholder="Start from here" />

        <textarea
          className="block border-b outline-0 p-2 w-full"
          {...register("Ingr")}
          placeholder="write Ingridient sperated bu comman" />

        <textarea
          className="block border-b outline-0 p-2 w-full"
          {...register("Inst")}
          placeholder="write Instraction sperated bu comman" />

        <select
          className="block border-b outline-0 p-2 "
          {...register("categary")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="nightdinner">Nightdinner</option>
          <option value="supper">Supper</option>
        </select>

        <button className="py-1  px-3 bg-gray-400 rounded font-bold mt-4 text-white">Save Recipe</button>
        <button onClick={deletehandler} className="py-1 ml-2 px-3 bg-red-400 rounded font-bold mt-4 text-white">Delete Recipe</button>

      </form>
    
    </div>
  )
}

export default SingleRecipe
