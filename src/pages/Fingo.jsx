import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const Fingo = () => {
    const projectDet = {
        name: "FINGO",
        date: "13-12-2024",
        image: "/assets/images/Fingo.png",
        desc: "A fully responsive corporate website built with HTML and CSS, created to present the company’s profile, services, team, and blog posts. It features a modern design, smooth layout, and full responsiveness",
        det: [
            {
                title: "Basic Languages : ",
                con: "HTML5, CSS.",
            },
            {
                title: "Frameworks : ",
                con: "None.",
            },
            {
                title: "Libraries : ",
                con: "None.",
            },],
        repo: "https://github.com/afif-gh99/FINGO",
        demo: "https://afif-gh99.github.io/FINGO"
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
            image: "/assets/images/Trippy.png",
            title: "Trippy",
            sub: "HTML-CSS-JavaScript-React.JS",
            demo: "https://github.com/afif-gh99/Trippy",
            more: "/trippy"
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
        <PageContainer   >
            <div >
                <ProjectDetails
                    projectDet={projectDet}
                    other={other}
                />
            </div>
        </PageContainer>
    )
}

export default Fingo
