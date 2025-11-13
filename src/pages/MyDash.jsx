import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const MyDash = () => {
    const projectDet = {
        name: "MyDash Dashboard",
        date: "18-3-2025",
        image: "/assets/images/Fingo.png",
        desc: "A fully responsive dashboard design for an educational platform featuring user accounts, payment plans, course organization, teachers, and study schedules. Styled using a custom-built UI library, the project focuses on clean design, structured layout, and flexibility across all screen sizes.",
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
                con: "Custom-built UI library.",
            },],
        repo: "https://github.com/afif-gh99/MyDash",
        demo: "https://afif-gh99.github.io/MyDash/"
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

export default MyDash
