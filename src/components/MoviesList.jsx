import Movie from "./Movie"
import moviesList from "../content/movies.json"
import {Fragment, useEffect, useRef, useState} from "react"

// 1. render the component and call the  observe the element
// 2. callback is called (first call), there is intersection hence loaded state is updated
// 3. useeffect is called because dependency on loaded. it loads the movies and unobserver the element
// 4. rerender is called because loaded and movies have changed
// 5. rerender the component and call the  observe the element

const MoviesList = (props) => {

    const take = 4
    const [loaded, setLoaded] = useState(0)
    const [movies, setMovies] = useState([])
    const observed = useRef()

    const callback = (entries) => {
        if (entries[0].isIntersecting) {
            setLoaded((prevLoad) => prevLoad + take)
        }
    }
    const observer = useRef(new IntersectionObserver(callback, {threshold: 0.3}));

    useEffect(() => {
        observer.current.unobserve(observed.current)
        setMovies((prevMovies) => [...prevMovies, ...moviesList.slice(loaded, loaded + take)])
    },[loaded])

    const setObserved = (element) => {
        if (element) {
            observed.current  = element
            observer.current.observe(element)
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
                    thumbPath={props.imgStorageUrl + movie.thumbPath}
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

