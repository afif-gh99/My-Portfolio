import { motion } from "framer-motion";

const Education = ({ title, edu, exp, dark }) => {
    return (
        <div name="education" className="mt-29 relative">
            <img className="absolute z-0 -right-16 lg:block hidden" src="/assets/images/eduShapes.png" alt="" />
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <h1 className="font-medium text-xl  text-priamry mb-2 text-center">{title}</h1>
                <p className="text-shadow-md/30 dark:text-shadow-white font-semibold text-main-black dark:text-white lg:text-[40px] text-[32px] text-center duration-300 lg:mb-[88px] mb-15">{edu}</p>
            </motion.section >
            <div className="relative z-10 w-full grid lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-40 gap-y-[46px] lg:mx-15 mx-8">
                {exp.map((item, index) => {
                    return (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative "
                        >
                            <div >
                                <div >
                                    <h2 className="font-medium text-shadow-sm/30 dark:text-shadow-white  lg:text-[25px] text-[18px] text-main-black dark:text-white duration-300">{item?.title}</h2>
                                    <p className="lg:w-[500px] 2xl:max-w-[420px] text-[#98A2B3] lg:text-base text-sm">{item?.sub}</p>
                                    <div className="bg-priamry/0 absolute  h-[130%] top-0 lg:-left-[70px] border-r-5 -left-10 border-dashed dark:border-white border-main-black duration-300 "></div>
                                    <img className="absolute top-0 lg:-left-[78px] -left-12" src={dark ? "/assets/images/dotDark.png" : "/assets/images/dot.png"} alt="" />
                                </div>
                            </div>
                        </motion.section >
                    )
                })}
            </div>
            <img className="absolute z-0 -bottom-60 -left-23 rotate-180 lg:block hidden" src="/assets/images/eduShapes.png" alt="" />
        </div>
    )
}

export default Education
