import { ProjectCardList } from "./ProjectCardList"
import { Button } from "../components/Button"
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
    return (
        <div id="projects-container" className="border-t mt-10 grid grid-cols-1">
            <h2 id="projects-title" className="font-heading-2 pt-20">Projects</h2>
            <div name="projects-container" className="">
                <ProjectCardList/>
            </div>
            {/* <button id="projects-details" className="w-[10vw] h-[3vw] rounded-full text-background-main text-2xl font-medium border-background-main bg-button-background">Details</button> */}
            <a href="#" name="" className="text-2xl flex mt-10 justify-self-center px-0.5 w-full hover:bg-text-default hover:text-background-main duration-200 transition-all">
                Learn More
                <ArrowUpRight/>
            </a>
        </div>
    )
}