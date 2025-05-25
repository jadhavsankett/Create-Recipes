import { useForm } from "react-hook-form"
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const [data, setdata] = useContext(recipecontext)

  const { register, handleSubmit, reset } = useForm();

  const Submithandler = (recipe) => {
    recipe.id = nanoid()

    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)

    reset()
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
          {...register("Start")}
          placeholder="Start from here" />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("Ingridient")}
          placeholder="write Ingridient sperated bu comman" />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("Instraction")}
          placeholder="write Instraction sperated bu comman" />

        <select
          className="block border-b outline-0 p-2"
          {...register("categary")}
        >
          <option value="Hotel manegment">categary 1</option>
          <option value="Self resturent">categary 2</option>
          <option value="natural">categary 3</option>
          <option value="Gym food">categary 4</option>
        </select>

        <button className="block py-1 px-3 bg-gray-400 rounded font-bold mt-4 text-gray-300">Save Recipe</button>

      </form>
    </div>
  )
}

export default Create
