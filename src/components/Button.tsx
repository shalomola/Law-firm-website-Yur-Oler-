import { motion } from 'framer-motion'
import { ARROWS } from '../constants/data'

type ButtonProps = {
  title: string,
  styles?: string,
  arrow?: "primary" | "secondary"
}

export const Button = ({title, styles, arrow}: ButtonProps) => {
  return (
    <motion.div 
      className={`button px-5 py-2 flex flex-row cursor-pointer ${styles}`}
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
        <p className="w-1/2 text-md">{title}</p>
        {arrow && 
            <img src={arrow === "primary" ? ARROWS.primary : ARROWS.secondary} alt="" className="w-16" />
        }
        
    </motion.div>
  )
}
