const props = (props) => {
  return (
    <div id={props.title} className="relative border border-red-500">
      <figure className="h-full border border-blue-500">
        <img
          className="w-full h-full object-cover"
          src={props.thumbPath}
          alt={props.title}
        />
        {/* <figcaption className="">
          <p className="">{props.synopsis}</p>
          <a href={props.trailerLink} className="">
            {" "}
            watch trailer{" "}
          </a>
        </figcaption> */}
      </figure>
      <div className="absolute bottom-1 w-full ml-2">
        <h2 className="text-title text-xl font-bold uppercase font-barlow primary-color">
          {props.title}
          <span className="text-text text-sm"> {props.year}</span>
        </h2>
        <ul className="text-xs flex flex-col gap-0">
          <li>
            Running Time <span className=""> {props.runningTime}</span>{" "}
          </li>
          <li>
            Directed by <span className="">{props.director}</span>
          </li>
          {/* <li>{props.categories.map((category) => category.name)}</li> */}
        </ul>
      </div>
    </div>
  )
}

export default props
