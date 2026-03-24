import { useEffect, useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectButton } from "@/components/ProjectButton"
import { checkUserIsMobile } from "@/lib/checkUserIsMobile"

const projects = [
    {
        title: "Simplified Social Network",
        image: "src/assets/simplified-social-network.png",
        description: "A social network webapp allows users to connect with each other, make new friends, share moments through posts, and chat in real time.",
        tags: ["NodeJS", "MongoDB", "JavaScript", "CSS", "Docker", "NGIX"],
        demo: "https://github.com/shisata/Simplified-Social-Network",
        github: "https://github.com/shisata/Simplified-Social-Network",
        span: "2",
    },
    {
        title: "SimpleCity",
        image: "src/assets/simple-city.png",
        description: "Mobile app with admin management system. Consulted, designed and set up the project for the client.",
        tags: ["Prototype", "TypeScript", "React", "Redux", "PostgreSQL"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "S.F.Unit",
        image: "src/assets/sfunit.png",
        description: "Real time multiplayer with stages and ending.",
        tags: ["NodeJS", "Socket.IO", "JavaScript", "SQLite"],
        demo: "https://github.com/shisata/sfunit-test",
        github: "https://github.com/shisata/sfunit-test",
        span: "1",
    },
    {
        title: "CMPT363",
        image: "src/assets/img1.jpg",
        description: "lorem ipsoum ldkjsalkd jsakld jaslkj dlkas dlksaj",
        tags: ["NodeJs", "Javascript", "MongoDB", "React"],
        demo: "https://bapxao.pythonanywhere.com/",
        github: "https://bapxao.pythonanywhere.com/",
        span: "1",
    },
    {
        title: "CHIP8 Emulator",
        image: "src/assets/CHIP8-emulator.png",
        description: "Emulation of 2-bit game console with playable games.",
        tags: ["JavaScript", "Assembly"],
        demo: "https://adamnizol.github.io/CHIP-8-Emulator/",
        github: "https://github.com/AdamNizol/CHIP-8-Emulator?tab=readme-ov-file",
        span: "1",
    }
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
                return <div key={idx} id="card-container" className={`rounded-xl min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] ${displaySpan[project.span]} relative group overflow-hidden`}>
                    {/* Image Div */}
                    <div className="w-full h-full overflow-hidden relative">
                        <img src={project.image} alt="No Image Avaialble" className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:blur-xs group-hover:grayscale-25 duration-500 delay-100"/>
                    </div>
                    {/* Link buttons */}
                    <div className={`top-[20%] left-0 right-0 absolute justify-center items-center flex gap-4 ${isMobile? `opacity-100` : `opacity-0`} group-hover:opacity-100 transition-opacity duration-300`}>
                        <ProjectButton logoName={"demo"} url={project.demo}/>
                        <ProjectButton logoName={"github"} url={project.github}/>
                    </div>
                    {/* Info panel */}
                    <div className={`absolute ${isMobile? `bottom-0` : `bottom-[-20%]`} group-hover:bottom-0 top-auto left-0 right-0 w-full h-[60%] p-4 bg-card1 transition-all duration-200`}>
                        <div name="info-positioner" className="w-full h-full relative grid gap-1 grid-rows-2 grid-cols-3 md:grid-cols-5">
                            {/* Text section */}
                            <div name="text-grid-container" className="col-span-full row-start-1 relative">
                                <h3 className="font-semibold text-2xl">{project.title}</h3>
                                <p className="pt-2 text-ellipsis">{project.description}</p>
                            </div>
                            {/* Tags section */}
                            <div name="tags-grid-container" className="row-start-2 col-span-2 md:col-span-4">
                                {/* <div className="absolute bottom-[35%] left-0 right-auto top-auto flex gap-1 flex-wrap w-[50%]">  */}
                                <div className="gap-x-1 gap-y-4 flex flex-wrap"> 
                                    {project.tags.map((tag, idx) => {
                                        return <span key={idx} className="w-[7rem] h-[2rem] rounded-full bg-background-lighter flex items-center place-content-center text-text-default">
                                            {tag}
                                        </span>
                                    })}
                                </div>
                            </div>
                            {/* Details section */}
                            <div name="details-grid-container" className="row-start-2 col-start-3 md:col-start-5 relative">
                                <div className="absolute bottom-[1rem] right-[1rem] left-auto top-auto w-[5rem] h-[2rem] rounded-full bg-white hover:bg-amber-50 flex place-content-center invisible">
                                    <a href="" className="font-medium text-sm text-background-main self-center">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}