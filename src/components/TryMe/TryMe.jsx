import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion";

const TryMe = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-[380px] lg:mt-[230px]  mt-[100px] group flex justify-center items-center overflow-hidden"
        >
            <div className="relative w-[90%] max-w-[1000px] h-[300px] flex justify-center items-center">
                <div className="absolute inset-0 bg-priamry  lg:-rotate-[1.5deg] -rotate-[3.5deg] group-hover:rotate-[3.5deg] rounded-4xl z-0 lg:group-hover:rotate-[1.5deg] duration-300"></div>
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-4xl z-10 shadow-lg"
                    src="/assets/images/tryBox.png"
                    alt=""
                />
                <div className="relative z-20 flex flex-col lg:flex-row justify-center items-center lg:gap-40 gap-10 text-center lg:text-start text-white p-6">
                    <div>
                        <h1 className="font-semibold lg:text-5xl text-[28px] mb-3 text-shadow-md/30 dark:text-shadow-white duration-300">
                            Try me out, risk free!
                        </h1>
                        <p className="lg:w-[430px] text-[12px] lg:text-base">
                            If you’re not happy with the design after the first draft, I’ll refund your deposit,{" "}
                            <span className="font-bold">no questions asked</span>
                        </p>
                    </div>

                    <ScrollLink
                        to="contact"
                        smooth
                        duration={400}
                        offset={-200}
                        className="flex text-white justify-center gap-4 items-center w-[155px] h-[50px] bg-priamry rounded-md font-semibold cursor-pointer hover:bg-hover duration-300"
                    >
                        Contact <MdOutlineKeyboardArrowRight className="text-2xl" />
                    </ScrollLink>
                </div>
            </div>
        </motion.section >

    )
}

export default TryMe
