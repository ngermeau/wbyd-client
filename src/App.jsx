import { createRoot } from "react-dom/client"
import { useEffect, useState } from "react"
import Movie from "./Movie"

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    requestMovies()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestMovies() {
    const res = await fetch("https://wbyd-production.up.railway.app/movie")
    const moviesJson = await res.json()
    setMovies(moviesJson.data)
  }

  return (
    <div className="text-text grid gap-2 h-screen font-poppins">
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          director={movie.director}
          runningTime={movie.runningTime}
          trailerLink={movie.trailerLink}
          thumbPath={movie.thumbPath}
          synopsis={movie.synopsis}
          key={movie.id}
        />
      ))}
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
