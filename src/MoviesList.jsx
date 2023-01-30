import Movie from "./Movie"
import { Fragment, useEffect, useRef, useState } from "react"


// 1) render 
// 2) useEffect
// 3) rerender if state change

const MoviesList = (props) => {

  const [movies, setMovies] = useState([])
  const [offset, setOffset] = useState({ offset: 0 })
  const observed = useRef()


  const observer = useRef(new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("last element being seen loading changing the state")
      setOffset((prevOffset) => {
        return { offset: 2 + prevOffset.offset }
      })
    }
  }, { threshold: 0.1 }))

  useEffect(() => {
    console.log('in useeffect')
    requestMovies(offset, 2)
    observer.current.unobserve(observed.current)
  }, [offset]) // eslint-disable-line react-hooks/exhaustive-deps


  async function requestMovies(offset, limit) {
    console.log("loading data")
    const res = await fetch(`https://wbyd-production.up.railway.app/movie?offset=${offset.offset}&limit=2`)
    const moviesJson = await res.json()
    console.log(movies)
    console.log(moviesJson)
    setMovies([...movies, ...moviesJson.data])
    // observer.current.unobserve(observed.current)
  }

  const setObserved = (element) => {
    if (element) {
      observed.current = element
      observer.current.observe(observed.current)
    }
  }

  return (
    <Fragment>
      {console.log("rendering")}
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          director={movie.director}
          runningTime={movie.runningTime}
          trailerLink={movie.trailerLink}
          thumbPath={props.imgStorage + movie.thumbPath}
          synopsis={movie.synopsis}
          categories={movie.categories}
          key={movie.id}
        />
      ))}
      <div ref={setObserved} />
    </Fragment>
  )
}

export default MoviesList
