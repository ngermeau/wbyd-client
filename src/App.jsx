import { createRoot } from "react-dom/client"
import Movie from "./Movie"

const App = () => {
  return (
    <div>
      <Movie name="test"/>
      <h1>hello bro</h1>
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>) 
