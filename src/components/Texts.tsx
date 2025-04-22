import { motion } from "framer-motion";

type TextProps = {
    heading: string;
}

const Texts = ({ heading }: TextProps) => {
  return (
    <div className="w-full h-full">
      <motion.h3
        className="text-3xl lg:text-4xl font-semibold"
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h3>
      <motion.p
        className="text-md lg:text-lg mt-5 font-semibold"
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        suscipit libero leo, quis congue dui fringilla in. Nulla diam ipsum,
        pellentesque nec blandit sed, volutpat vel massa. Nulla ultrices, libero
        vel ultrices vulputate, ipsum neque aliquam lectus, ut gravida felis
        ipsum sit amet ante.
      </motion.p>
    </div>
  );
};

export default Texts;
