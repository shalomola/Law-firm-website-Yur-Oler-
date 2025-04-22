import { motion } from "framer-motion";
import { Button } from "../../../components/Button";
import { BANNERS } from "../../../constants/data";

const Form = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-10 bg-[#192026] ">
      <div className="form w-full lg:w-1/2 flex flex-col items-start gap-5">
        <motion.div 
            className="input-group text-[#A18875] flex flex-col w-full h-auto"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
        >
          <p>First name</p>
          <input
            type="text"
            placeholder=""
            className="w-full h-12 p-2 border-b border-b-[#A18875] focus:outline-none"
          />
        </motion.div>
        <motion.div 
            className="input-group text-[#A18875] flex flex-col w-full h-auto"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
            viewport={{ once: true }}
        >
          <p>Last name</p>
          <input
            type="text"
            placeholder=""
            className="w-full h-12 p-2 border-b border-b-[#A18875] focus:outline-none"
          />
        </motion.div>
        <motion.div 
            className="input-group text-[#A18875] flex flex-col w-full h-auto"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
        >
          <p>Email Address</p>
          <input
            type="text"
            placeholder=""
            className="w-full h-12 p-2 border-b border-b-[#A18875] focus:outline-none"
          />
        </motion.div>
        <motion.div 
            className="input-group text-[#A18875] flex flex-col w-full h-auto"
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
        >
          <p>Message</p>
          <textarea
            name=""
            rows={5}
            id=""
            className="w-full p-2 border-b border-b-[#A18875] focus:outline-none"
          ></textarea>
        </motion.div>
        <Button title="Send" styles="bg-[#A18875]" />
      </div>

      <div className="banner relative w-full lg:w-1/2 h-[80vh] lg:h-full">
        <img src={BANNERS.contact} alt="" />
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

export default Form;
