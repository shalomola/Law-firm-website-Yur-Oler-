import { BANNERS } from "../../../constants/data"
import { motion } from "framer-motion"
import { LOGO } from "../../../constants/data"
import { IMAGES } from "../../../constants/data"

const Video = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center overflow-hidden p-5 lg:p-10">
        <div className="logo absolute w-96 h-96 lg:w-[550px] lg:h-[550px] left-[-5%] bottom-[-10%]">
            <img src={LOGO.logoSecondary} alt="" className="w-full h-full object-contain opacity-50" />
        </div>
        <motion.div className="content relative w-full lg:w-7/10 h-8/10 flex flex-col items-end box-border gap-3 z-20">
            <div className="video w-full h-full">
                <img src={BANNERS.video} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-[#A18875] font-semibold">A brief word from the senior partner</p>
            <img src={IMAGES.play} alt="" className="absolute cursor-pointer w-20 h-20 top-[50%] left-[50%] translate-[-50%]" />
        </motion.div>
    </div>
  )
}

export default Video