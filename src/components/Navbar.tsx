import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS, LOGO } from "../constants/data";
import { AnimatePresence, easeInOut, motion, stagger } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // console.log(toggleMenu);
  console.log(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeInOut: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between  right-0 top-0 z-50 p-4">
        <Link to={'/'}>
          <img src={LOGO.logoPrimary} alt="" className="w-4 h-4" />
        </Link>
        <button onClick={toggleMenu} className="rounded-md p-2 cursor-pointer">
                {isOpen ? (
                    <FaTimes className="text-white hover:text-[#A18875] h-4 w-4" />
                ) : (
                    <FaBars className="text-white hover:text-[#A18875] h-4 w-4" />
                )}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-20 flex flex-col justify-center items-center bg-[#192026] text-white"
          >
            <ul
              className="space-y-6 text-3xl"
            >
              {LINKS.map((link) => (
                <motion.li 
                key={link.id}
                variants={linkVariants}
                >
                  <a 
                  href={link.link} 
                  onClick={toggleMenu}
                  rel="noopener noreferrer"
                  className="text-5xl font-light uppercase tracking-wide hover:text-[#A18875]  lg:text-9xl">
                    {link.linkName}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
