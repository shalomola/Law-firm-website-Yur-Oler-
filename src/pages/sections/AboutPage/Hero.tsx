import PageHero from "../../../components/Hero"
import { BANNERS } from "../../../constants/data"

const Hero = () => {
  return (
    <div>
      <PageHero
        header="About Us"
        banner={ BANNERS.about }
      />
    </div>
  )
}

export default Hero