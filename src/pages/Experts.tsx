import Hero from "./sections/ExpertsPage/Hero"
import ExpertsList from "./sections/ExpertsPage/Experts"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


const Experts = () => {
  return (
    <div className="w-full">
      <Hero />
      <ExpertsList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Experts