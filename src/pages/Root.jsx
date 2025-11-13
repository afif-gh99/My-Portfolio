import { useState } from "react"
import NavBar from "../components/NavBar/NavBar"
import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"

const links = [
    {
        name: "Home",
        section: 'home'
    },
    {
        name: "About Me",
        section: 'about'
    },
    {
        name: "Education",
        section: 'education'
    },
    {
        name: "Projects",
        section: 'projects'
    },
    {
        name: "Contact",
        section: 'contact'
    },
]
const socialLinks = [
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/share/1DFuLpvGz3/?mibextid=wwXIfr",
    },
    {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/afif-ghaziri2004",
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/afif.gh99?igsh=cjlybTJqMzRyMmsz&utm_source=qr",
    },
    {
        icon: <FiGithub />,
        url: "https://github.com/afif-gh99",
    },
]
const Root = () => {
    const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
    return (
        <div
            className={`font-popins ${dark ? "dark" : ""} `}>
            <NavBar
                logo="Afif Ghaziri"
                navLinks={links}
                setDark={setDark}
                dark={dark}
            />
            <Outlet context={{ dark }} />
            <Footer
                socialLinks={socialLinks}
            />
        </div>
    )
}

export default Root
