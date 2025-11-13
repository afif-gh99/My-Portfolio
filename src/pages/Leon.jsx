import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const Leon = () => {
    const projectDet = {
        name: "Leon",
        date: "18-10-2024",
        image: "/assets/images/Leon.png",
        desc: "A modern and fully responsive company profile design for an advertising, design, marketing, and software services agency. The layout emphasizes visual creativity, clarity, and professional branding to effectively showcase the agency’s identity and offerings across all screen sizes.",
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
        repo: "https://github.com/afif-gh99/Leon",
        demo: "https://afif-gh99.github.io/Leon"
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
            image: "/assets/images/Kasper.png",
            title: "Kasper",
            sub: "HTML-CSS",
            demo: "https://afif-gh99.github.io/Kasper",
            more: "/kasper"
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

export default Leon
