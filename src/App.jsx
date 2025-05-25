import Mainrapper from "./rapper/Mainrapper"
import Navb from "./navbar/Navb"

const App = () => {
  return (
    <div className="p-5 bg-gray-300 w-full h-full">
     <Navb/>
      <Mainrapper/>
    </div>
  )
}

export default App
