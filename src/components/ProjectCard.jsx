import { useEffect, useState } from "react";
import { ProjectButton } from "./ProjectButton";
import { checkUserIsMobile } from "@/lib/checkUserIsMobile";

export const ProjectCard = ({spanSize = 1, projectName = "ProjectName", image, description, techStack, demo, github}) => {
    const displaySpan = {
        1 : "",
        2 : "xl:col-span-2",
        3 : "xl:col-span-3",
    }
    const [img, setImg] = useState(() => { return `bg-[url(${image})]`})

    useEffect(() => {
        console.log(img)
    }, [])
    return (
        <div id="card-container" className={`border-[0.5px] border-text-extra-muted min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] bg-card-background ${displaySpan[spanSize]} overflow-hidden relative`}>
            <div name="background-container" className={`w-full h-full ${img} card-bg-behavior`}></div>
            <div name="card-detail-container">
                <div name="description" className="absolute left-0 bottom-0 m-10">
                    <h1 className="font-bold text-accent2">{projectName}</h1>
                    <div name="techstack-container"></div>
                    <p>{description}</p>
                </div>
                <div name="hidden-content-container" className="flex ">
                    <ProjectButton/>
                    <ProjectButton/>
                </div>
            </div>
        </div>
    )
}
