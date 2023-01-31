import { createRoot } from "react-dom/client"
import MoviesList from "./MoviesList.jsx"
import Hero from "./Hero.jsx"

const App = () => {
  const imgStorage = import.meta.env.VITE_IMG_STORAGE_URL

  return (
    <div className="bg-background overflow-hidden text-text text-sm grid auto-rows-400 gap-1 font-poppins sm:grid-cols-auto-fit-16">
      <Hero />
      <MoviesList imgStorage={imgStorage} className="overflow-hidden" />
    </div >
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
