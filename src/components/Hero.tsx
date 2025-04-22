import { motion } from "framer-motion";

type heroProps = {
    header: string;
    banner: string;
}

const PageHero = ({ header, banner }: heroProps) => {
  return (
    <div className="hero-section w-full h-screen relative overflow-hidden bg-[#192026] box-border">
      <div className="text-container w-full h-2/5 flex gap-10 items-center px-5 lg:px-10">
        <div className="text flex flex-col lg:flex-row gap-5 lg:gap-10 items-start mt-10 text-[#A18B75]">
          <motion.h1
            className="w-full lg:w-1/2 text-5xl lg:text-9xl text-nowrap text-primary"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {header}
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
      <div className="banner w-full h-3/5 relative mt-10 lg:mt-0">
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover lg:object-left-top"
        />
        <motion.div
          className="cover absolute top-0 left-0 w-full h-full bg-[#192026] z-[+100]"
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          transition={{ ease: "easeInOut", duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default PageHero;
