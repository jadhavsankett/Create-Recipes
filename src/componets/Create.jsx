import { useForm } from "react-hook-form"
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const {data, setdata} = useContext(recipecontext)

  const { register, handleSubmit, reset } = useForm();

  const Submithandler = (recipe) => {
    recipe.id = nanoid()

    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    toast.success("Save Recipe")
    reset()
    navigate("/recipes")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(Submithandler)}>

        <input
          className="block border-b outline-0 p-2"
          {...register("Image")}
          type="url"
          placeholder="Enter Image Url.." />

        <input
          className="block border-b outline-0 p-2"
          {...register("name")}
          type="text"
          placeholder="Chef Name" />

        <input
          className="block border-b outline-0 p-2"
          {...register("Title")}
          type="text"
          placeholder="Recipe Title" />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="Start from here" />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("Ingr")}
          placeholder="write Ingridient sperated bu comman" />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("Inst")}
          placeholder="write Instraction sperated bu comman" />

        <select
          className="block border-b outline-0 p-2"
          {...register("categary")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="nightdinner">Nightdinner</option>
          <option value="supper">Supper</option>
        </select>

        <button className="block py-1 px-3 bg-gray-400 rounded font-bold mt-4 text-gray-300">Save Recipe</button>

      </form>
    </div>
  )
}

export default Create
