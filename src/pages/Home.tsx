import Hero from "./sections/HomePage/Hero";
import Stats from "./sections/HomePage/Stats";
import Values from "./sections/HomePage/Values";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Home = () => {
  return (
    <div className="w-full">
      <Preloader />
      <Hero />
      <Stats />
      <Values />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
