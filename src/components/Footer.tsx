import { LINKS, LOGO, SOCIALS } from "../constants/data"

const Footer = () => {
  return (
    <div className="relative w-full h-screen bg-[#192026] overflow-hidden ">
        <div className="logo absolute -bottom-[5%] lg:-bottom-44 lg:-right-20 w-full lg:w-1/2 lg:h-full max-w-[700px] max-h-[700px] opacity-[50%]">
            <img src={LOGO.logoSecondary} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center p-5 lg:p-10 box-border">
            <div className="content w-full">
                <div className="texts">
                    <h2 className="text-3xl lg:text-4xl text-[#A18B75] font-semibold">Yur & Oler</h2>
                    <p className="text-sm lg:text-lg text-[#A18B75] font-semibold mt-5 w-5/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit libero leo, quis congue dui fringilla in. Nulla diam ipsum, pellentesque nec blandit sed, volutpat vel massa.</p>
                </div>
                <div className="info flex flex-row w-full gap-20 lg:gap-32 mt-10">
                    <div className="follow">
                        <h3 className="text-lg lg:text-2xl text-[#A18B75] font-bold text-nowrap">Follows Us</h3>
                        <ul className="text-left mt-3 flex flex-col gap-1">
                            {SOCIALS.map((social) => (
                                <li><a href={social.link} className="text-sm lg:text-xl text-[#A18B75] font-semibold">{social.platform}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav">
                        <h3 className="text-lg lg:text-2xl text-[#A18B75] font-bold">Navigation</h3>
                        <ul className="text-left mt-3 flex flex-col gap-1">
                            {LINKS.map((link) => (
                                <li><a href={link.link} className="text-sm lg:text-xl text-[#A18B75] font-semibold">{link.linkName}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer