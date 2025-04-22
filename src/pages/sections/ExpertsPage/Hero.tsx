import PageHero from "../../../components/Hero"
import { BANNERS } from "../../../constants/data"

const Hero = () => {
  return (
    <div>
      <PageHero
        header="Experts"
        banner={BANNERS.experts}
      />
    </div>
  )
}

export default Hero