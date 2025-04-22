import { motion } from 'framer-motion'

const StatNumbers = () => {
  return (
    <div className="w-full flex flex-row items-center gap-3 lg:justify-between mt-10">
                <motion.div
                  className="stat text-center"
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-[#A18B75] text-4xl lg:text-7xl leading-[100%]">
                    15+
                  </h2>
                  <p className=" text-xs lg:text-sm text-[#A18B75] font-medium">
                    Years Experience
                  </p>
                </motion.div>

                <motion.div
                  className="stat text-center"
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "linear", duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-[#A18B75] text-4xl lg:text-7xl leading-[100%]">
                    20+
                  </h2>
                  <p className=" text-xs lg:text-sm text-[#A18B75] font-medium">
                    Years Experience
                  </p>
                </motion.div>

                <motion.div
                  className="stat text-center"
                  initial={{ opacity: 0, y: "20%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "linear", duration: 0.5, delay: 0.7 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-[#A18B75] text-4xl lg:text-7xl leading-[100%]">
                    450+
                  </h2>
                  <p className=" text-xs lg:text-sm text-[#A18B75] font-medium">
                    Favorable Judgments
                  </p>
                </motion.div>
              </div>
  )
}

export default StatNumbers