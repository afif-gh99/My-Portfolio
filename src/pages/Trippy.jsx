import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const Trippy = () => {
    const projectDet = {
        name: "Trippy",
        date: "26-9-2025",
        image: "/assets/images/Trippy.png",
        desc: "A fully responsive travel agency website designed to showcase company services, trip history, and contact information. Built with React, it provides a clean and modern interface that adapts seamlessly across all screen sizes. The platform highlights travel destinations, offers clear details about the agency’s background, and includes a simple way for users to get in touch for bookings or inquiries.",
        det: [
            {
                title: "Basic Languages : ",
                con: "HTML5, CSS, JavaScript.",
            },
            {
                title: "Frameworks : ",
                con: "None.",
            },
            {
                title: "Libraries : ",
                con: "React.JS, React Icons.",
            },],
        repo: "https://github.com/afif-gh99/Trippy",
        demo: "https://github.com/afif-gh99/Trippy"
    }
    const other = [
        {
            image: "/assets/images/DashStack.png",
            title: "DashStack Dashboard",
            sub: "HTML-CSS-JavaScript-React.JS-Tailwind.CSS-Rest API",
            demo: "https://dash-stack-three.vercel.app/",
            more: "/dashstack"
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

    return (
        <PageContainer>
            <div >
                <ProjectDetails
                    projectDet={projectDet}
                    other={other}
                />
            </div>
        </PageContainer>
    )
}

export default Trippy
