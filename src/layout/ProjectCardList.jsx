import { useEffect, useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectButton } from "@/components/ProjectButton"
import { checkUserIsMobile } from "@/lib/checkUserIsMobile"

const projects = [
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "2",
    },
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "Simplified Social Network",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "CSS", "Jquery"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
]

    const displaySpan = {
        1 : "",
        2 : "xl:col-span-2",
        3 : "xl:col-span-3",
    }

export const ProjectCardList = () => {
    const [isMobile, setIsMobile] = useState(() => {return checkUserIsMobile()})

    useEffect(() => {
        console.log(isMobile)
    }, [isMobile])

    return (
        <div id="card-list" className="mt-10 grid grid-flow-row-dense xl:grid-cols-3 gap-4 place-content-center">
            {projects.map((project, idx) => {
                return <div key={idx} id="card-container" className={`border-[0.5px] rounded-xl border-text-extra-muted min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] ${displaySpan[project.span]} relative group overflow-hidden`}>
                    {/* Image Div */}
                    <div className="w-full h-full overflow-hidden relative">
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:blur-xs group-hover:grayscale-25 duration-500 delay-100"/>
                    </div>
                    {/* Link buttons */}
                    <div className={`top-[20%] left-0 right-0 absolute justify-center items-center flex gap-4 ${isMobile? `opacity-100` : `opacity-0`} group-hover:opacity-100 transition-opacity duration-300`}>
                        <ProjectButton logoName={"demo"} url={project.demo}/>
                        <ProjectButton logoName={"github"} url={project.github}/>
                    </div>
                    {/* Info panel */}
                    <div className="absolute bottom-[-20%] top-auto left-0 right-0 w-full h-[50%] bg-text-default group-hover:bottom-0 transition-all duration-200">
                        <div name="info-positioner" className="text-background-main w-full h-full flex-col">
                            <h3 className="font-semibold text-2xl ">{project.title}</h3>
                            <p className="">{project.description}</p>
                            
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}