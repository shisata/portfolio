import { useEffect } from "react"
import demoUrl from "/src/images/square-arrow-out-up-right.svg"
import githubUrl from "/src/images/github.svg"

const logos = {
    demo: demoUrl,
    github: githubUrl
}

export const ProjectButton = ({logoName, url}) => {
    // const projectURL = `${url}`
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-[4rem] h-[4rem] bg-white rounded-full hover:bg-amber-50 shadow-black shadow-2xl transition-all duration-250 flex justify-center items-center ">
            <img src={logos[logoName]} alt="logoName" className="aspect-square w-[2rem]"/>
        </a>
    )
}