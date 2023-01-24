const props = (props) => {
  return (
    <div id={props.title} className="relative border">
      <figure className="h-full border after:absolute after:bottom-0 after:w-full after:h-2/5 after:bg-gradient-to-t after:from-black after:to-transparent">
        <img
          className="w-full h-full object-cover"
          src={props.thumbPath}
          alt={props.title}
        />
        <figcaption className="absolute">
          <p className="">{props.synopsis}</p>
          <a href={props.trailerLink} className="">
            {" "}
            watch trailer{" "}
          </a>
        </figcaption>
      </figure>
      <div className="absolute bottom-1 w-full ml-2 ">
        <h2 className="text-title text-xl font-bold uppercase font-barlow primary-color leading-6">
          {props.title}
          <span className="text-text text-sm"> {props.year}</span>
        </h2>
        <ul className="text-sm flex flex-col leading-4">
          <li>Running Time {props.runningTime}</li>
          <li>Directed by {props.director}</li>
          <li>
            {props.categories.map((category) => category.name).join(" - ")}{" "}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default props
