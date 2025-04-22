import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import StatNumbers from "../components/StatNumbers"
import Experts from "./sections/AboutPage/Experts"
import Hero from "./sections/AboutPage/Hero"
import Values from "./sections/AboutPage/Values"
import Video from "./sections/AboutPage/Video"

const About = () => {
  return (
    <div className="w-full bg-[#192026] pt-10 lg:pt-5">
      <Hero />
      <div className="w-full flex py-10 items-center justify-center">
        <div className="w-full lg:w-2/3 px-5">
          <StatNumbers />
        </div>
      </div>
      <Values />
      <Video />
      <Experts />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default About