import { FaLinkedin, FaLocationDot, FaSquareFacebook } from "react-icons/fa6"
import AboutMe from "../components/AboutMe/AboutMe"
import Hero from "../components/Hero/Hero"
import PageContainer from "../components/PageContainer/PageContainer"
import { FaInstagramSquare } from "react-icons/fa"
import { useOutletContext } from "react-router"
import Education from "../components/Education/Education"
import TryMe from "../components/TryMe/TryMe"
import MyProjects from "../components/MyProjects/MyProjects"
import Contact from "../components/Contact/Contact"
import { IoCall, IoMail } from "react-icons/io5"

const MainPage = () => {
    const socialLinks = [
        {
            icon: <FaSquareFacebook />,
            url: 'https://www.facebook.com/share/1DFuLpvGz3/?mibextid=wwXIfr'
        },
        {
            icon: <FaInstagramSquare />,
            url: 'https://www.instagram.com/afif.gh99?igsh=cjlybTJqMzRyMmsz&utm_source=qr'
        },

        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/afif-ghaziri2004'
        },

    ]
    const skills = [
        {
            name: "HTML5",
            progress: "90%",
        },
        {
            name: "CSS3",
            progress: "85%",
        },
        {
            name: "JavaScript",
            progress: "80%",
        },
        {
            name: "React.js",
            progress: "85%",
        },
        {
            name: "Tailwind",
            progress: "85%",
        },
    ]
    const exp = [
        {
            title: "Information Technology Engineering",
            sub: "Currently pursuing a B.S. degree at the Syrian Virtual University since 2022, with graduation expected in 2028. Focused on software engineering, AI, algorithms, and modern web technologies to strengthen both theoretical and practical skills."
        },
        {
            title: "Business Administration",
            sub: "Studying at Damascus University since 2022, expected to graduate in 2026. Building knowledge in management, marketing, and organizational strategy, integrating business and technical thinking in digital solutions"
        },
        {
            title: "Frontend Development",
            sub: "Completed a six-month professional training program at Vica Web Solution, covering HTML5, CSS3, JavaScript (ES7), React.js, Bootstrap, Tailwind CSS, and REST APIs. Developed 9 fully responsive, real-world projects, applying best practices in clean code, component-based design, and user-centered interfaces."
        },
        {
            title: "Instructor",
            sub: "Taught for one year at Al-Noor Educational Center, guiding middle and high-school students, improving their academic performance, and encouraging teamwork and motivation."
        },
        {
            title: "Academic Trainer",
            sub: "Worked for two years with the Elite University Team, preparing study materials and summaries to help students understand and master university subjects."
        },
        {
            title: "Techniques",
            sub: "Experienced with Git and GitHub for project management, collaboration, and maintaining clean, organized codebases."
        },
    ]
    const projects = [
        {
            image: "/assets/images/DashStack.png",
            title: "DashStack Dashboard",
            sub: "HTML-CSS-JavaScript-React.JS-Tailwind.CSS-Rest API",
            demo: "https://dash-stack-three.vercel.app/",
            more: "/dashstack"
        },
        {
            image: "/assets/images/Trippy.png",
            title: "Trippy",
            sub: "HTML-CSS-JavaScript-React.JS",
            demo: "https://github.com/afif-gh99/Trippy",
            more: "/trippy"
        },
        {
            image: "/assets/images/Fingo.png",
            title: "FINGO",
            sub: "HTML-CSS",
            demo: "https://afif-gh99.github.io/FINGO",
            more: "/fingo"
        },
        {
            image: "/assets/images/MyDash.png",
            title: "MyDash Dashboard",
            sub: "HTML-CSS (private library)",
            demo: "https://afif-gh99.github.io/MyDash/",
            more: "/mydash"
        },
        {
            image: "/assets/images/Kasper.png",
            title: "Kasper",
            sub: "HTML-CSS",
            demo: "https://afif-gh99.github.io/Kasper",
            more: "/kasper"
        },
        {
            image: "/assets/images/Leon.png",
            title: "Leon",
            sub: "HTML-CSS",
            demo: "https://afif-gh99.github.io/Leon",
            more: "/leon"
        },
    ]
    const contactDetails = [
        {
            icon: <IoCall />,
            title: "Call Me",
            detail: "+963 936 406 456"
        },
        {
            icon: <IoMail />,
            title: "Email Me",
            detail: "afif.ghaziri2004@gmail.com"
        },
        {
            icon: <FaLocationDot />,
            title: "Address",
            detail: "Damascus, Syria"
        },
    ]
    const { dark } = useOutletContext();
    return (
        <>
            <PageContainer>
                <Hero
                    title="I'm Afif, Frontend Developer"
                    subTilte="I'm Afif, a Frontend Developer specializing in building fast, responsive, and professional web interfaces using modern technologies like Bootstrap, React, and Tailwind. I focus on turning ideas into smooth and effective digital experiences"
                    URLcv="/assets/Afif Ghaziri CV.pdf"
                    profileImg="/assets/images/profile.png"
                    socialLinks={socialLinks}
                />
                <AboutMe
                    title="About Me"
                    subTilte="I'm a Software Engineer and Frontend Developer skilled in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap. I build modern, responsive, and high-performance web applications focused on clean code and seamless user experience."
                    skills={skills}
                    dark={dark}
                />
                <Education
                    title="Education & Experience"
                    edu="Software Engineer"
                    exp={exp}
                    dark={dark}
                />
                <TryMe />
                <MyProjects
                    title="Portfolio"
                    github="https://github.com/afif-gh99"
                    projects={projects}
                />
                <Contact
                    title="Contact"
                    contactDetails={contactDetails}
                />
            </PageContainer>
        </>
    )
}

export default MainPage
