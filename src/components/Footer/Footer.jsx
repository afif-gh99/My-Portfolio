import { motion } from "framer-motion";

const Footer = ({ socialLinks }) => {
    return (
        <div className="lg:px-[70px] lg:py-10  duration-300 dark:bg-dark-bg px-[35px] ">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="flex justify-between items-center text-main-black dark:text-white  border-t border-[#BEC0BF] pt-8 pb-10 lg:flex-row flex-col gap-4">
                    <p className="text-shadow-md/30 dark:text-shadow-white">&copy; 2025 - All Rights Reserved </p>
                    <p className="text-shadow-md/30 dark:text-shadow-white">Development by Afif</p>
                    <div className=" flex gap-4 items-center justify-center">
                        {socialLinks.map((link, index) => {
                            return (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                    href={link.url}
                                    className=" bg-priamry w-7 h-7 flex justify-center items-center rounded-full hover:bg-hover duration-300 text-white">
                                    {link.icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </motion.section >

        </div>
    )
}

export default Footer
