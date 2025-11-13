import { CiCircleMore } from "react-icons/ci"
import { LuCircleArrowOutUpRight } from "react-icons/lu"
import { Link } from "react-router"

const Proj = ({ image, title, sub, demo, more }) => {
    return (
        <div className=" overflow-hidden">
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img className="group-hover:scale-110 duration-300 " src={image} alt="" loading="lazy" />
                <div className="bg-[#0000007f] w-full h-full absolute z-20 top-0 group-hover:opacity-100 opacity-0 duration-300  justify-center items-center lg:flex hidden">
                    <Link
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        to={more}
                        className="bg-priamry rounded-xl px-5 py-2.5 text-white font-semibold shadow-2xl flex justify-center items-center gap-3"
                    >More Details
                        <CiCircleMore className="text-xl" />
                    </Link>
                </div>
                <Link
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={more}
                    className="absolute top-3 left-3 text-white  rounded-xl px-2.5 py-1 bg-[#0c97e27e] block lg:hidden">More Details</Link>
            </div>
            <div className="mt-8  text-main-black dark:text-white duration-300">
                <h1 className="font-semibold text-[22px] mb-[11px] text-shadow-md/30 dark:text-shadow-white">{title}</h1>
                <div className="flex justify-between items-center">
                    <p className="">{sub}</p>
                    <a href={demo}
                        className="relative group flex items-center justify-center hover:scale-120 duration-300"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LuCircleArrowOutUpRight className="text-priamry text-4xl" />
                        <span className="absolute bottom-full mb-2 px-3 py-1
                        text-xs text-main-black dark:text-white bg-gray-100 dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-200 whitespace-nowrap">Project Demo</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj
