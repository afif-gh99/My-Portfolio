import { useEffect, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io"
import { LuCircleArrowOutUpRight, LuFullscreen } from "react-icons/lu"
import { Link, Links } from "react-router";
import { motion } from "framer-motion";
import { TiHome } from "react-icons/ti";

const ProjectDetails = ({ projectDet, other }) => {
    const [largScreen, setLargeScreen] = useState(false)
    useEffect(() => {
        const screenSize = () => setLargeScreen(window.innerWidth >= 1024)
        screenSize()
        window.addEventListener("resize", screenSize)
        return () => window.removeEventListener("resize", screenSize)
    }, [])
    const [index, setIndex] = useState(0);
    const itemsCount = largScreen ? 3 : 1;
    const [fullscreen, setFullscreen] = useState(false)
    const next = () => { if (index + itemsCount < other.length) { setIndex(index + itemsCount) } }
    const back = () => {
        if (index - itemsCount >= 0) {
            setIndex(index - itemsCount)
        }
    }
    return (
        <div name="projects" className="mt-20 relative">
            <Link
                to={"/"}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed text-white text-2xl lg:bottom-10 bottom-5 lg:right-10 right-5 w-12 h-12 shadow-lg
                        dark:shadow-gray-700 rounded-xl bg-priamry flex  justify-center items-center 
                        cursor-pointer hover:bg-hover duration-300 z-99 hover:scale-110 hover:-translate-y-2.5"
            ><TiHome />
            </Link>
            {fullscreen && (
                <div
                    className="fixed inset-0 bg-black/90 flex justify-center items-center z-99"
                    onClick={() => setFullscreen(false)}
                >
                    <img
                        src={projectDet.image}
                        alt=""
                        className="max-w-full max-h-full rounded-xl object-contain shadow-2xl
                        scale-95 opacity-0 animate-[zoomIn_0.4s_ease_forwards]"
                    />
                    <IoMdClose
                        onClick={() => setFullscreen(false)}
                        className="absolute text-white right-5 top-5 text-5xl cursor-pointer hover:text-priamry duration-300" />
                </div>)}
            <div className="flex gap-11 justify-center items-center mb-45 flex-col lg:flex-row ">
                <div className="relative lg:min-w-[620px] lg:h-[460px] rounded-xl group overflow-hidden">
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <img className="lg:min-w-[620px] lg:h-[460px] group-hover:scale-110 duration-300 object-cover rounded-xl" src={projectDet.image} alt="" />
                    </motion.section >
                    <div className="bg-[#00000080] w-full h-full absolute z-20 top-0 group-hover:opacity-100 opacity-0 duration-300 flex justify-center items-center">
                        <div className="text-white flex text-7xl gap-8">
                            <LuFullscreen
                                onClick={() => setFullscreen(true)}
                                className="cursor-pointer hover:text-priamry duration-300" />
                            <a
                                className="cursor-pointer hover:text-priamry duration-300"
                                href={projectDet.demo} target="_blank" rel="noopener noreferrer">
                                <LuCircleArrowOutUpRight />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative text-main-black dark:text-white duration-500">
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <a
                            className="absolute text-priamry text-4xl lg:top-0 right-0 bottom-5 hover:text-hover duration-200 hover:scale-110"
                            href={projectDet.demo} target="_blank" rel="noopener noreferrer">
                            <LuCircleArrowOutUpRight />
                        </a>
                        <h1 className="text-[28px] font-semibold">{projectDet.name}</h1>
                        <span className="block text-sm text-[#A6A6A6] font-medium mb-3">{projectDet.date}</span>
                    </motion.section >
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="lg:text-[18px] mb-[18px]">{projectDet.desc}</p>
                    </motion.section >
                    <div className="flex flex-col gap-3 mb-[30px]">
                        {projectDet.det.map((detail, index) => {
                            return (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.3 + 0.3, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <div >
                                        <p className="lg:text-[18px] font-medium">{detail.title}<span className="font-normal">{detail.con}</span></p>
                                    </div>
                                </motion.section >
                            )
                        })}
                        <motion.section
                            className="mt-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0 }}
                        >
                            <a
                                className="rounded-xl bg-priamry px-8 py-3 font-medium text-white hover:bg-hover duration-300 w-fit "
                                href={projectDet.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </motion.section >
                    </div>
                </div>
            </div>
            <div >
                <div className="flex justify-between items-center mb-14 ">
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <div>
                            <h1 className="font-medium text-[20px] text-priamry">Portfolio</h1>
                            <p className="font-semibold text-main-black dark:text-white lg:text-[40px] text-[32px] duration-300  ">The Best <span className="text-priamry">Projects</span></p>
                        </div>
                    </motion.section >
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <div className="flex  text-[#A6A6A6] lg:gap-2 gap-6">
                            <div
                                onClick={back}
                                className="w-8 h-8 rounded-full border border-priamry cursor-pointer hover:bg-priamry duration-300 hover:text-white flex justify-center items-center">
                                <IoIosArrowBack />
                            </div>
                            <div
                                onClick={next}
                                className="w-8 h-8 rounded-full border border-priamry cursor-pointer hover:bg-priamry duration-300 hover:text-white flex justify-center items-center">
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </motion.section >
                </div>
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${index * (360 + 16)}px)` }}
                    >
                        {other.map((proj, index) => {
                            return (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: largScreen ? (index % 3) * 0.25 : 0, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0 }}
                                >
                                    <div
                                        className="lg:w-[365px] w-[320px] h-100 mr-14 shrink-0">
                                        <div className="relative overflow-hidden rounded-xl shadow-2xl group mb-8">
                                            <img className="group-hover:scale-110 duration-300 rounded-lg w-full h-[270px] object-cover " src={proj.image} alt="" loading="lazy" />
                                            <div className="bg-[#0000007f] w-full h-full absolute z-20 top-0 group-hover:opacity-100 opacity-0 duration-300 lg:flex hidden justify-center items-center">
                                                <Link
                                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                    to={proj.more}
                                                    className="bg-priamry rounded-xl px-5 py-2.5 text-white font-semibold shadow-2xl flex justify-center items-center gap-3"
                                                >More Details
                                                    <CiCircleMore className="text-xl" />
                                                </Link>
                                            </div>
                                            <Link
                                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                to={proj.more}
                                                className="absolute top-3 left-3 text-white  rounded-xl px-2.5 py-1 bg-[#0c97e27e] block lg:hidden">More Details</Link>
                                        </div>
                                        <div className=" text-main-black dark:text-white duration-300 ">
                                            <h1 className="font-semibold text-[22px] mb-[11px] text-shadow-md/30 dark:text-shadow-white">{proj.title}</h1>
                                            <div className="flex justify-between items-center">
                                                <p className="">{proj.sub}</p>
                                                <a href={proj.demo}
                                                    className="relative group flex items-center justify-center hover:scale-120 duration-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <LuCircleArrowOutUpRight className="text-priamry text-2xl" />
                                                    <span className="absolute bottom-full mb-2 px-3 py-1
                                                    text-xs text-main-black dark:text-white bg-gray-100 dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-200 whitespace-nowrap">Project Demo</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section >
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
