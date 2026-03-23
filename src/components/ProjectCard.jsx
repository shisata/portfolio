import { useEffect, useState } from "react";
export const ProjectCard = ({spanSize = 1, projectName, image, description, techStack, demo, github}) => {
    const displaySpan = {
        1 : "",
        2 : "xl:col-span-2",
        3 : "xl:col-span-3",
    }
    return (
        <div id="card-container" className={`border-[0.5px] border-text-extra-muted min-w-[70vw] md:min-w-[40rem] xl:min-w-[20rem] h-[30rem] p-2 bg-card-background ${displaySpan[spanSize]}`}>

        </div>
    )
}
