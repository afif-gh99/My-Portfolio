import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const Kasper = () => {
    const projectDet = {
        name: "Kasper",
        date: "15-11-2024",
        image: "/assets/images/Kasper.png",
        desc: "A fully responsive website design for a software services company. It presents the company’s solutions and expertise through a clean, modern layout focused on usability, clarity, and professional visual identity across all devices.",
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
        repo: "https://github.com/afif-gh99/Kasper",
        demo: "https://afif-gh99.github.io/Kasper"
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

export default Kasper
