import { lady } from "../../../constants/data";
import { LAWTYPES } from "../../../constants/data";
import { Button } from "../../../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StatNumbers from "../../../components/StatNumbers";

const Stats = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Get the window width to determine the width of the bar
  // This is a workaround to get the window width in a server-side rendered app
  const windowWidth = window.innerWidth;

  // Define the animations for the bar and text
  // The bar will move from 0% to -49% on the x-axis and scale from 1 to 1.3
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-49%"]);
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    windowWidth < 1024 ? ["0%", "100%"] : ["20%", "100%"]
  );
  const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.3"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["1", "0.3"]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);

  return (
    <div
      ref={targetRef}
      className="stat-wrap relative w-full h-[200vh] lg:h-[400vh] bg-[#192026]"
    >
      <motion.div
        className="bar absolute right-0 top-0 bg-[#A18B75] h-full"
        style={{ width }}
      ></motion.div>

      <div className="sticky top-[0] w-full h-[100vh] box-border overflow-hidden">
        <div className="lady w-full h-[40vh] lg:w-[60vw] lg:h-full absolute bottom-0 lg:top-0 lg:-right-[10%] 5-[+100]">
          <motion.img
            style={{ scale, opacity }}
            src={lady}
            alt=""
            className="absolute top-0 right-0 h-full object-cover"
          />
        </div>
        <motion.div
          style={{ x }}
          className="content w-[200%] h-full flex flex-row translate-x-[-0%] lg:pt-20"
        >
          <div className="stats w-screen lg:w-1/2 h-full flex flex-row gap-32 box-border px-5 lg:px-10">
            <div className="w-full lg:w-1/2 h-full box-border py-16">
              <motion.h2
                className="text-2xl lg:text-4xl text-[#A18B75] font-semibold"
                initial={{ opacity: 0, y: "20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Start With Us
              </motion.h2>
              <motion.p
                className="text-sm lg:text-lg text-[#A18B75] mt-5 lg:mt-10"
                initial={{ opacity: 0, y: "20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                suscipit libero leo, quis congue dui fringilla in. Nulla diam
                ipsum, pellentesque nec blandit sed, volutpat vel massa. Nulla
                ultrices, libero vel ultrices vulputate, ipsum neque aliquam
                lectus, ut gravida felis ipsum sit amet ante. Nulla facilisis
                euismod urna, molestie pretium nisi. Mauris sollicitudin
                interdum laoreet.
              </motion.p>
              <StatNumbers />
            </div>
          </div>
          <div className="info w-screen lg:w-1/2 h-full px-5 flex flex-row">
            <div className="content w-full lg:w-1/2 h-full py-16 flex flex-col items-start">
              <motion.h2
                style={{ opacity: textOpacity, y: textY }}
                className="text-2xl lg:text-4xl text-[#192026] font-semibold"
              >
                Where can we step in?
              </motion.h2>
              <ul className="w-full mt-4 lg:mt-8 flex flex-col gap-5 lg:gap-7">
                {LAWTYPES.map((type) => (
                  <motion.li
                    style={{ opacity: textOpacity, y: textY }}
                    className="w-full flex flex-row gap-3 items-center"
                  >
                    <div className="icon w-4 h-4 lg:w-7 lg:h-7 bg-[#825545] rounded-full"></div>
                    <div className="texts flex flex-col">
                      <h4 className="text-md lg:text-lg text-[#192026] font-semibold">
                        {type.type}
                      </h4>
                      <p className="text-xs lg:text-sm text-[#192026] ">
                        This is the description for this law type. lets just
                        make it a little longer
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="btn"
              >
                <Button
                  title={"More"}
                  styles={
                    "bg-[#192026] text-white mt-10 gap-5 justify-between items-center"
                  }
                  arrow={"secondary"}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
