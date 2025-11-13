import { HiChatBubbleBottomCenter } from "react-icons/hi2"
import { motion } from "framer-motion";

const AboutMe = ({ title, subTilte, skills, dark }) => {
    return (
        <div name="about" className="flex lg:justify-between 2xl:justify-around items-center lg:mt-29 mt-10 lg:flex-row-reverse flex-col gap-10 lg:gap-0">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="lg:w-[500px] hidden lg:block">
                    <img className=" mx-auto min-w-[500px]" src="/assets/images/Circles.png" alt="" />
                    <div className="relative ">
                        <img className="absolute left-[375px] bottom-[155px] html-move " src="/assets/images/html.png" alt="" />
                        <img className="absolute left-[130px] bottom-[375px] css-move" src="/assets/images/css.png" alt="" />
                        <img className="absolute w-[105px] left-[285px] bottom-80 js-move" src="/assets/images/javascript.webp" alt="" />
                        <img className="absolute w-[105px] left-[220px] bottom-[70px] tail-move" src="/assets/images/tailwind.png" alt="" />
                        <img className="absolute w-[100px] left-[35px] bottom-[255px] boot-move" src="/assets/images/bootstrap.png" alt="" />
                        <img className="absolute left-[210px] bottom-[225px] spin-self  z-50" src="/assets/images/react.png" alt="" />
                        <img className="absolute left-[110px] bottom-[130px] git-move " src={dark ? "/assets/images/githubDark.png" : "/assets/images/github.png"} alt="" />
                    </div>
                </div>
            </motion.section >
            <div className="lg:w-[600px] dark:text-white">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h1 className="font-semibold text-shadow-md/30 dark:text-shadow-white text-main-black lg:text-[40px] text-3xl dark:text-white mb-3">{title}</h1>
                </motion.section >
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="text-main-black dark:text-white lg:text-base text-sm">{subTilte}</p>
                </motion.section >
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-10"
                >
                    <div >
                        {skills.map((skill, index) => {
                            return (
                                <div className="mb-4" key={index}>
                                    <h2 className="duration-300 mb-1 text-shadow-sm/30 dark:text-shadow-white font-semibold text-2xl">{skill?.name}</h2>
                                    <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 duration-300">
                                        <div
                                            className="h-3 rounded-full relative bg-linear-to-r from-priamry via-[#34b8fe] to-[#80d3ff] transition-all duration-500" style={{ width: `${skill.progress}` }}>
                                            <HiChatBubbleBottomCenter className="absolute -right-4 -top-10 text-4xl text-priamry" />
                                            <span className="absolute -right-2.5 -top-8.5 text-xs text-white">{skill.progress}</span>
                                            <span className="dark:bg-gray-700 shadow-[0px_4px_7px_0px_#00000033] duration-300 bg-gray-200 border-4 border-priamry w-6 h-6 absolute -right-5 top-1/2 -translate-1/2 rounded-full"></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.section >
            </div>
        </div >
    )
}

export default AboutMe
