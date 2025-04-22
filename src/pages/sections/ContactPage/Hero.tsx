import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero-section w-full h-[50vh] relative overflow-hidden bg-[#192026] box-border">
      <div className="text-container w-full h-full flex gap-10 items-center px-5 lg:px-10">
        <div className="text flex flex-col lg:flex-row gap-5 lg:gap-10 items-start mt-10 text-[#A18B75]">
          <motion.h1
            className="w-full lg:w-1/2 text-5xl lg:text-8xl text-primary"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="w-full lg:w-1/2 lg:text-md"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit libero leo, quis congue dui fringilla in. Nulla diam ipsum,
            pellentesque nec blandit sed, volutpat vel massa. Nulla ultrices,
            libero vel ultrices vulputate, ipsum neque aliquam lectus, ut
            gravida felis ipsum sit amet ante.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Hero