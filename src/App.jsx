import Mainrapper from "./rapper/Mainrapper"
import Navb from "./navbar/Navb"

const App = () => {
  return (
    <div className="p-5 w-screen h-screen bg-gray-300">
     <Navb/>
      <Mainrapper/>
    </div>
  )
}

export default App
