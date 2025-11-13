import { motion } from "framer-motion";

const Contact = ({ title, contactDetails }) => {
    return (
        <div className="contact mt-[94px]">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="lg:mb-14 mb-10">
                    <h1 className="font-medium text-[20px] text-priamry mb-3">{title}</h1>
                    <p className="font-semibold text-main-black text-shadow-md/30 dark:text-shadow-white lg:text-[40px] text-3xl dark:text-white duration-300">Let's Discuss Your <span className="text-priamry text-shadow-md/30 text-shadow-priamry">Project</span></p>
                </div>
            </motion.section >
            <div className="flex justify-between items-center lg:gap-16 gap-12 flex-col lg:flex-row">
                <div className="flex flex-col lg:gap-6 ">
                    {contactDetails.map((con, index) => {
                        return (
                            <motion.section
                                key={index}
                                className="flex items-center rounded-xl py-6 px-2 gap-5 shadow-2xs"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <div className="bg-priamry text-white text-3xl p-4 rounded-xl">
                                    {con.icon}
                                </div>
                                <div>
                                    <h2 className="text-[#92929D]">{con.title}</h2>
                                    <p className="font-medium text-main-black dark:text-white duration-300 text-shadow-md/30 dark:text-shadow-white">{con.detail}</p>
                                </div>
                            </motion.section >
                        )
                    })}
                </div>
                <motion.section
                    className=" w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <form
                        action="https://formspree.io/f/xldoqjpd"
                        method="POST"
                        className="flex flex-col gap-6 flex-1 dark:text-white w-full">
                        <div className="flex lg:flex-row flex-col  w-full gap-4 ">
                            <input
                                className="py-4 px-6 rounded-xl border border-[#BEC0BF] w-full focus:outline-priamry"
                                type="text" name="name" placeholder="Full Name" required />
                            <input
                                className="py-4 px-6 rounded-xl border border-[#BEC0BF] w-full focus:outline-priamry"
                                type="text" name="email" placeholder="Your Email" required />
                        </div>
                        <input
                            className="py-4 px-6 rounded-xl border border-[#BEC0BF] focus:outline-priamry"
                            type="text" name="phone" placeholder="Phone Number" />
                        <textarea name="message" className="h-[170px] py-4 px-6 rounded-xl border border-[#BEC0BF] focus:outline-priamry resize-none" placeholder="Message"></textarea>
                        <input className="mx-auto lg:mx-0 bg-priamry text-white text-sm font-medium w-fit px-[50px] py-3.5 rounded-xl cursor-pointer hover:bg-hover duration-300" type="submit" value="Send Message" />
                    </form>

                </motion.section >


            </div>
        </div>
    )
}

export default Contact
