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
      <div className="absolute bottom-1 w-full ">
        <h2 className="text-title text-xl uppercase font-barlow primary-color">
          {props.title}
          <span className="text-text text-sm"> {props.year}</span>
        </h2>
        <div className="text-sm">
          <ul>
            <li>
              Running Time <span className=""> {props.runningTime}</span>{" "}
            </li>
            <li>
              Directed by <span className="">{props.director}</span>
            </li>
            <li>
              <span className="">{props.tag}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default props
