import { useEffect, useState } from "react";
import { ProjectButton } from "./ProjectButton";
import { checkUserIsMobile } from "@/lib/checkUserIsMobile";

export const ProjectCard = ({spanSize = 1, projectName, image, description, techStack, demo, github}) => {
    const displaySpan = {
        1 : "",
        2 : "xl:col-span-2",
        3 : "xl:col-span-3",
    }

    useEffect(() => {
        console.log(image)
    }, [])
    return (
        <div id="card-container" className={`border-[0.5px] border-text-extra-muted min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] bg-card-background ${displaySpan[spanSize]} relative`}>
            <div name="background-container" className={`w-full h-full bg-[url(${image})] card-bg-behavior `}></div>
            <div name="card-detail-container">
                <div name="description" className="absolute left-0 bottom-0 m-10">
                    <h1 className="font-bold text-accent2">ProjectName</h1>
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
