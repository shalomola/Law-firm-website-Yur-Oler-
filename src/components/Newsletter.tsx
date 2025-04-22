import { BANNERS } from "../constants/data";
import { Button } from "./Button";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="w-full h-[80vh] relative flex flex-col items-center justify-center">
      <img
        src={BANNERS.newsletter}
        alt=""
        className="w-full h-full object-cover absolute top left-0"
      />
      <div className="content w-full text-center flex flex-col items-center justify-center gap-1 z-10 px-5">
        <motion.h2 
          className="text-white text-2xl lg:text-7xl"
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >Subscribe to our Newsletter</motion.h2>
        <motion.p 
          className="text-white text-md lg:text-3xl "
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Stay up to date with our latest information
        </motion.p>
        <motion.div 
          className="input-group flex flex-row w-full lg:w-[60%] lg:h-16 mt-5"
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            placeholder="Enter Email"
            type="text"
            name="news"
            className="w-full h-full bg-white px-2 lg:px-5 text-xs lg:text-lg focus:outline-none"
          />
          <Button
            title={"Subscribe"}
            styles={
              "bg-[#A18B75] text-[#192026] text-xs lg:text-xl font-semibold w-2/6 lg:w-2/5 items-center justify-center"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
