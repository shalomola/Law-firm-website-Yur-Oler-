import { motion } from 'framer-motion'
import { IMAGES } from '../../../constants/data'

const Values = () => {
  return (
    <div className='w-full lg:h-[110vh]'>
        <div className="w-full h-screen lg:h-1/2 flex flex-col lg:flex-row">
            <div className="image w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden relative">
                <motion.div 
                    className="cover absolute top-0 right-0 w-full h-full bg-[#192026]"
                    initial={{ width: "100%" }}
                    whileInView={{ width: "0%" }}
                    transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                ></motion.div>
                <img src={IMAGES.man2} alt=""  className='w-full h-full object-cover' />
            </div>
            <div className="texts w-full lg:w-1/2 h-1/2 lg:h-full box-border p-5 lg:p-10 bg-[#192026] text-[#A18B75]">
                <motion.h3 
                    className='text-3xl lg:text-4xl font-semibold'
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >Seasoned Experts</motion.h3>
                <motion.p 
                    className='text-md lg:text-lg mt-5 font-semibold'
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit libero leo, quis congue dui fringilla in. Nulla diam ipsum, pellentesque nec blandit sed, volutpat vel massa. Nulla ultrices, libero vel ultrices vulputate, ipsum neque aliquam lectus, ut gravida felis ipsum sit amet ante.</motion.p>
            </div>
        </div>
        <div className="w-full h-screen lg:h-1/2 flex flex-col lg:flex-row-reverse">
            <div className="image w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden relative">
                <img src={IMAGES.clients} alt="" className='w-full h-full object-cover' />
                <motion.div 
                    className="cover absolute top-0 left-0 w-full h-full bg-[#A18B75] z-[+100]"
                    initial={{ width: "100%" }}
                    whileInView={{ width: "0%" }}
                    transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                ></motion.div>
            </div>
            <div className="texts w-full lg:w-1/2 h-1/2 lg:h-full box-border p-5 lg:p-10 text-[#192026] bg-[#A18B75]">
                <motion.h3 
                    className='text-3xl lg:text-4xl font-semibold'
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >Your Best Interest</motion.h3>
                <motion.p 
                    className='text-md lg:text-lg mt-5 font-semibold'
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit libero leo, quis congue dui fringilla in. Nulla diam ipsum, pellentesque nec blandit sed, volutpat vel massa. Nulla ultrices, libero vel ultrices vulputate, ipsum neque aliquam lectus, ut gravida felis ipsum sit amet ante.</motion.p>
            </div>
        </div>
    </div>
  )
}

export default Values