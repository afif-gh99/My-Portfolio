import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6"
import { FaBars } from "react-icons/fa6"
import { IoClose, IoMoon, IoSunnySharp } from "react-icons/io5"
import { Link as ScrollLink } from "react-scroll"

const NavBar = ({ logo, navLinks, setDark, dark }) => {
    const [menuOpen, setOpen] = useState(false)
    const [showArrow, setArrow] = useState(false)
    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY >= 1100) {
                setArrow(true)
            }
            else {
                setArrow(false)
            }
        }
        window.addEventListener("scroll", handelScroll)
        return () => window.removeEventListener("scroll", handelScroll)
    }, [])
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <nav className="flex items-center justify-between fixed left-0 lg:px-[70px]  px-[35px] py-10 w-full h-9 z-99 dark:bg-dark-bg duration-300 bg-white">
                    <h1 className="font-semibold text-2xl text-main-black dark:text-white ">{logo}</h1>
                    <div>
                        <ul className="hidden lg:flex gap-6 font-medium text-main-black dark:text-white  ">
                            {navLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <ScrollLink
                                            className="duration-200 cursor-pointer hover:text-hover"
                                            to={link?.section}
                                            spy
                                            smooth
                                            duration={400}
                                            activeClass={"activeLink"}
                                            offset={-250}
                                        >
                                            {link?.name}
                                        </ScrollLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <span
                            onClick={() => {
                                setDark(prev => !prev)
                            }}
                            className="text-main-black text-3xl cursor-pointer dark:text-white">
                            {dark ? <IoSunnySharp /> : <IoMoon />}
                        </span>
                        <span>
                            {menuOpen ? <IoClose onClick={() => setOpen(prev => !prev)}
                                className="text-main-black text-2xl cursor-pointer dark:text-white block lg:hidden" />
                                : <FaBars
                                    onClick={() => setOpen(prev => !prev)}
                                    className="text-main-black text-2xl cursor-pointer dark:text-white block lg:hidden" />
                            }
                        </span>
                    </div>
                </nav>
                <div className={`lg:hidden bg-white shadow-[0_0_50px_rgba(0,0,0,0.5)] z-98 fixed top-0 left-0 w-full rounded-b-3xl dark:bg-dark-bg flex flex-col items-center justify-center gap-10 py-5 text-lg font-medium text-main-black dark:text-white duration-300 ${menuOpen ? "translate-y-20" : "-translate-y-full"}`}>
                    {navLinks.map((link, index) => (
                        <ScrollLink
                            className="duration-200 cursor-pointer w-full flex justify-center "
                            key={index}
                            to={link?.section}
                            spy
                            smooth
                            duration={400}
                            activeClass={"activeLink"}
                            offset={-200}
                            onClick={() => setOpen(false)}
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </div>
                {showArrow &&
                    <ScrollLink
                        className="fixed lg:bottom-10 bottom-5 lg:right-10 right-5 w-12 h-12 shadow-lg
                        dark:shadow-gray-700 rounded-xl bg-priamry flex  justify-center items-center 
                        cursor-pointer hover:bg-hover duration-300 z-99 hover:scale-110 hover:-translate-y-2.5"
                        to="home"
                        spy
                        smooth
                        duration={400}
                    >
                        <FaArrowUp className="  text-white text-2xl" />
                    </ScrollLink>

                }
            </motion.section >


        </>
    )
}

export default NavBar
