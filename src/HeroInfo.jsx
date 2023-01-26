import heart from "./assets/img/heart.png"
import github from "./assets/img/github.png"

const HeroInfo = () => {
  return (
    <div>
      <p className="p-3 text-text text-lg sm:text-base">
        After couple of requests from friends asking advices on movies to watch, I've decided to create <span className="text-title">Watch
          Before You Die</span> to share the collection of my all time favorite movies. If you feel that we share the
        same kind of taste and think of any worthwhile addition to this list, please feel free to <a className="underline" href="https://github.com/ngermeau/watch_before_you_die/issues/new">send a request.</a>
      </p>
      <p className="p-3">
        Made with <img className="w-5 inline-block m-1" src={heart} /> on
        <a href="https://github.com/ngermeau/twbyd" target="_blank" rel="noreferrer noopener">
          <img className="w-6 inline-block m-1" src={github} />
        </a>
      </p>
    </div>

  )
}

export default HeroInfo
