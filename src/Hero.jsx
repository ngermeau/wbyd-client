import { useState } from "react"
import HeroTitle from "./HeroTitle"
import HeroInfo from "./HeroInfo"

const Hero = () => {
  let [displayInfo, setDisplayInfo] = useState(false)

  let toggleHero = () => setDisplayInfo(!displayInfo)
  let hero = displayInfo ? <HeroInfo /> : <HeroTitle />
  return (
    < div className="relative text-title" >
      {hero}
      <div className="absolute border-2 border-text font-barlow text-1xl bottom-2 right-2 padding px-2 py-4">
        <a onClick={toggleHero} className="underline"> about </a>
      </div>
    </div >
  )
}

export default Hero

