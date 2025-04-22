import { HERO } from "../../../constants/data";
import { Button } from "../../../components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section w-full h-screen px-5 relative flex items-center justify-center overflow-hidden">
      <div className="hero-bg absolute w-full h-full top-0 left-0 z-[-5]">
        <motion.img 
          src={HERO.banner} 
          alt="" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1  }}
          transition={{ ease: 'easeOut', duration: 3, delay: 0.3 }}
          viewport={{ once: false }}
          />
      </div>
      <div className="cover absolute w-full h-full top-0 left-0 bg-[#192026] opacity-[60%]"></div>
      <div className="content z-[10] relative">
        <motion.h1 
          className="title font-light text-7xl lg:text-[200px] text-nowrap text-white opacity-[50%]"
          initial={{ scale: 3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 3 }}
          viewport={{ once: true }}
        >
          Yur <span className="font-bold">&</span> Oler
        </motion.h1>
        <motion.h3 
        className="subtitle text-xl lg:text-5xl absolute top-[50%] left-[50%] translate-[-50%] text-nowrap text-white font-medium"
        initial={{ opacity: 0, scale: 0.4, y: "200%" }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ease: 'easeOut', duration: 1, delay: 3.5 }}
        viewport={{ once: true }}        
        >
          {" "}
          Upholding <span className="">Justice</span> Seeking{" "}
          <span className="cursor-pointer">Truth</span>
        </motion.h3>
      </div>
      <Link to="about" className="cursor-pointer z-[10]">
        <Button title="Book a Consultation" styles={"absolute bottom-0 right-0 bg-[#A18B75] w-full lg:w-1/5 justify-between items-center"} arrow={"primary"} />
      </Link>
    </div>
  );
};

export default Hero;
