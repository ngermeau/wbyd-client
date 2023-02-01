import Movie from "./Movie"
import { Fragment, useEffect, useRef, useState } from "react"


/**
 * 1) render 
 * 2) new element ref (last div) to be observed is put into a ref and our observer observe it
 * 3) useEffect is triggered initialy after the first render and data is loaded 
 * 4) data loading is updating movie state with new movies -> render will be triggered 
 * 5) unobserving the current observed element  
 ----
 * 5) render with new movies  
 * 6) new element ref (last div) to be observed is put into a ref and our observer observe it
 * 7) if element is displayed on screen with treshold, observer changing the state of query to fetch next batch  
 * 8)   because query state has changed -> 1) useeffect will be trigger (watching on query dep) and a render will be triggered
 * 9)   useEffect is triggered and data is loaded 
 * 10)  data loading is updating movie state with new movies -> render will be triggered 
 * 11)  unobserving the current observed element
 */

const MoviesList = (props) => {

  const take = 4

  const [query, setQuery] = useState({ skip: 0, take: take })
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const observed = useRef()

  const observer = useRef(new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { setQuery(prevQuery => ({ skip: prevQuery.skip + take, take: take })) }
  }, { threshold: 0.1 }))

  useEffect(() => {
    if (hasMore) {
      requestMovies(query)
      // unobserving is necessary to trigger muliple time the first load 
      observer.current.unobserve(observed.current)
    }
  }, [query]) // eslint-disable-line react-hooks/exhaustive-deps


  async function requestMovies(query) {
    const res = await fetch(`${import.meta.env.VITE_MOVIES_API_URL}/movie?offset=${query.skip}&limit=${query.take}`)
    const moviesJson = await res.json()
    if (moviesJson.data.length === 0) {
      setHasMore(false)
    }
    setMovies([...movies, ...moviesJson.data])
  }

  const setObserved = (element) => {
    if (element) {
      observed.current = element
      observer.current.observe(observed.current)
    }
  }

  return (
    <Fragment>
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
