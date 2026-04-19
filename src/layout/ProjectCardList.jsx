import { useEffect, useState } from "react"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectButton } from "@/components/ProjectButton"
import { checkUserIsMobile } from "@/lib/checkUserIsMobile"
// import simplifiedSocialNetworkUrl from "/src/images/simplified-social-network.png"
import simpliNetUrl from "/src/images/SimpliNet.png"
import simpleCityUrl from "/src/images/simple-city.png"
import sfunitUrl from "/src/images/sfunit.png"
import cmpt363Url from "/src/images/cmpt363.png"
import chip8Url from "/src/images/CHIP8-emulator.png"

const projects = [
    {
        title: "SimpliNet",
        image: simpliNetUrl,
        description: "A social network webapp allows users to connect with each other, make new friends, share moments through posts, and chat in real time.",
        tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "JavaScript"],
        demo: "https://simplified-social-network-v2.vercel.app/",
        github: "https://github.com/shisata/simplified-social-network-v2",
        span: "2",
        butonVisible: true,
    },
    {
        title: "SimpleCity",
        image: simpleCityUrl,
        description: "Mobile app with admin management system. Consulted, designed and set up the project for the client.",
        tags: ["Prototype", "TypeScript", "React", "Redux", "PostgreSQL", "Node.js"],
        demo: "",
        github: "",
        span: "1",
        butonVisible: false,
    },
    {
        title: "S.F.Unit",
        image: sfunitUrl,
        description: "Real time multiplayer with stages and ending.",
        tags: ["Node.js", "Socket.IO", "JavaScript", "SQLite"],
        demo: "https://github.com/shisata/sfunit-276",
        github: "https://github.com/shisata/sfunit-276",
        span: "1",
        butonVisible: true,
    },
    {
        title: "Meeting Prototype",
        image: cmpt363Url,
        description: "Prototyping a classroom app for attending class live, scheduling courses and emailing.",
        tags: ["Axure RP", "Wireframe"],
        demo: "",
        github: "",
        span: "1",
        butonVisible: false,
    },
    {
        title: "CHIP8 Emulator",
        image: chip8Url,
        description: "Emulation of 2-bit game console with playable games.",
        tags: ["JavaScript", "Assembly"],
        demo: "https://adamnizol.github.io/CHIP-8-Emulator/",
        github: "https://github.com/AdamNizol/CHIP-8-Emulator?tab=readme-ov-file",
        span: "1",
        butonVisible: true,
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
    
    // const linkButtonVisible = `${return project.butonVisible && `invisible`}`

    return (
        <div id="card-list" className="mt-10 grid grid-flow-row-dense xl:grid-cols-3 gap-4 place-content-center">
            {projects.map((project, idx) => {
                return <div key={idx} id="card-container" className={`rounded-xl min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] ${displaySpan[project.span]} relative group overflow-hidden`}>
                    {/* Image Div */}
                    <div className="w-full h-full overflow-hidden relative">
                        <img src={project.image} alt="No Image Avaialble" className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:blur-xs group-hover:grayscale-25 duration-500 delay-100"/>
                    </div>
                    {/* Link buttons */}
                    <div className={`${project.butonVisible? `` : `invisible`} top-[20%] left-0 right-0 absolute justify-center items-center flex gap-4 ${isMobile? `opacity-100` : `opacity-0`} group-hover:opacity-100 transition-opacity duration-300`}>
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
                                        return <span key={idx} className="w-[7rem] h-[2rem] rounded-full bg-card-tag flex items-center place-content-center text-text-default">
                                            {tag}
                                        </span>
                                    })}
                                </div>
                            </div>
                            {/* Details section */}
                            {/* <div name="details-grid-container" className="row-start-2 col-start-3 md:col-start-5 relative">
                                <div className="absolute bottom-[1rem] right-[1rem] left-auto top-auto w-[5rem] h-[2rem] rounded-full bg-white hover:bg-text-default flex place-content-center">
                                    <a href="/works" className="font-medium text-sm text-background-main self-center">Details&rarr;</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}