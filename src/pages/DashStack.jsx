import PageContainer from "../components/PageContainer/PageContainer"
import ProjectDetails from "../components/ProjectDetails/ProjectDetails"

const DashStack = () => {
    const projectDet = {
        name: "DashStack Dashboard",
        date: "11-10-2025",
        image: "/assets/images/DashStack.png",
        desc: "A fully responsive admin dashboard web application for managing an e-commerce store. Built primarily with React, it allows users to sign in or create new accounts, add and display products flexibly (with search and sorting features), and edit product details such as name, price, and image. The dashboard also supports deleting products and provides a smooth, modern interface optimized for all screen sizes.",
        det: [
            {
                title: "Basic Languages : ",
                con: "HTML5, CSS, JavaScript.",
            },
            {
                title: "Frameworks : ",
                con: "Tailwind.CSS.",
            },
            {
                title: "Libraries : ",
                con: "React.JS, React-Toastify, React Icons.",
            },],
        repo: "https://github.com/afif-gh99/DashStack",
        demo: "https://dash-stack-three.vercel.app/"
    }
    const other = [
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

export default DashStack
