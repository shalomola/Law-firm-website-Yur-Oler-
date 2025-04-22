// components/Preloader.jsx
import { motion } from "framer-motion";
import { LOGO } from "../constants/data";
// import { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#192026] flex flex-col items-center justify-center z-[500]"
      initial={{ opacity: 1, display: "flex" }}
      animate={{ opacity: 0, display: "none" }}
      exit={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
        <img src={LOGO.logoSecondary} alt="" className="w-40" />
      <motion.h1
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.6,
        }}
        className="text-xl text-[#A18B75] font-semibold mt-10"
      >
        Loading...
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
