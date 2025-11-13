import { RiShining2Fill } from "react-icons/ri"
import { motion } from "framer-motion";

const Hero = ({ title, subTilte, URLcv, profileImg, socialLinks }) => {
    return (
        <div name="home" className="lg:h-[calc(100vh-80px)] h-[calc(100vh)] flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-7 pt-20 ">
            <div className="text-main-black dark:text-white duration-300 relative order-3 lg:order-1">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="text-priamry lg:text-xl font-medium">Welcome</span>
                    <h1 className="font-bold text-shadow-lg/30 dark:text-shadow-white lg:text-[55px] text-3xl  lg:w-[560px] leading-[110%] lg:mb-10 mb-5"><span className="font-normal">HEY! </span>{title}</h1>
                </motion.section >
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="lg:text-base text-sm">{subTilte}</p>
                    <a className="block w-fit mt-[30px] px-[34px] py-3.5 bg-priamry text-white rounded-lg font-medium text-sm hover:bg-hover  duration-300 shadow-xl dark:shadow-gray-700" href={URLcv} download>Download CV</a>
                </motion.section >
                <img className="absolute top-0 -left-[70px] pointer-events-none" src="/assets/images/Blur.png" alt="" />
            </div>
            <div className="relative order-1 lg:order-2">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="bg-[#cae0eb] lg:w-[500px] w-[300px] h-[150px] lg:h-[300px] flex justify-center rounded-4xl shadow-2xl dark:shadow-gray-700">
                        <img className="absolute lg:w-[380px] w-[200px] bottom-0 " src={profileImg} alt="profile" />
                    </div>
                    <RiShining2Fill className="text-3xl absolute text-[#5e3bee] right-15 -bottom-6 starts-1" />
                    <RiShining2Fill className="text-2xl absolute text-[#5e3bee] -top-10 right-7 starts-2" />
                    <RiShining2Fill className="text-3xl absolute text-[#5e3bee] top-28 -left-10 starts-3" />
                    <img className="absolute -bottom-5 w-12" src="/assets/images/shining.png" alt="" />
                    <img className="absolute -bottom-1.5 right-1 w-12" src="/assets/images/shining.png" alt="" />
                    <img className="absolute -top-12 left-10 w-12" src="/assets/images/shining.png" alt="" />
                </motion.section >
            </div>

            <div className="order-2 lg:order-3 flex flex-row lg:flex-col justify-center items-center lg:gap-8 gap-12 text-main-black ">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="lg:[writing-mode:vertical-rl] dark:text-white duration-300 lg:text-base text-sm">Follow me on:</p>
                </motion.section >
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="flex flex-row lg:flex-col  justify-center items-center lg:gap-9 gap-6">
                        <span className="block w-px h-16 bg-priamry lg:rotate-0 rotate-90 lg:mr-0 mr-5"></span>
                        {socialLinks.map((link, index) => {
                            return (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.3, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <a className="lg:text-2xl text-xl text-priamry hover:text-hover duration-200 hover:scale-150"
                                        href={link?.url} target="_blank" rel="noopener noreferrer">
                                        {link?.icon}
                                    </a>
                                </motion.section >
                            )
                        })}
                    </div>
                </motion.section >
            </div>
        </div>
    )
}

export default Hero
