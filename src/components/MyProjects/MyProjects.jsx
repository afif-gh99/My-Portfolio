import { GoArrowUpRight } from "react-icons/go"
import Proj from "../Proj/Proj"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MyProjects = ({ title, github, projects }) => {
    const [largeScreen, setLargeScreen] = useState(false)
    useEffect(() => {
        const screenSize = () => setLargeScreen(window.innerWidth >= 1024)
        screenSize()
        window.addEventListener("resize", screenSize)
        return () => window.removeEventListener("resize", screenSize)
    }, [])
    return (
        <div name="projects" className="mt-24 ">
            <div >
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-between lg:items-end gap-5 lg:flex-row flex-col"
                >
                    <div>
                        <h1 className="font-medium text-[20px] text-priamry">{title}</h1>
                        <p className="font-semibold text-main-black text-shadow-md/30 dark:text-shadow-white lg:text-[40px] text-3xl lg:w-[400px] dark:text-white duration-300"
                        >My Creative Works Latest <span className="text-priamry text-shadow-md/30 text-shadow-priamry"
                        >Projects</span></p>
                    </div>
                    <a className="w-fit h-fit bg-priamry rounded-xl text-white text-sm py-4 px-8 
                flex items-center justify-center gap-2 hover:bg-hover duration-300 group"
                        href={github} target="_blank" rel="noopener noreferrer"
                    >View GitHub <GoArrowUpRight className="text-xl group-hover:scale-125 duration-300" /></a>
                </motion.section >
            </div>
            <div className="grid lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[58px] mt-14">
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <motion.section
                                initial={{ opacity: 0, scale: 1.1, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: largeScreen ? (index % 3) * 0.2 : 0, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.28 }}
                            >
                                <Proj
                                    image={project?.image}
                                    title={project?.title}
                                    sub={project?.sub}
                                    demo={project?.demo}
                                    more={project?.more}
                                />
                            </motion.section >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyProjects
