import { ProjectCardList } from "./ProjectCardList"
import { Button } from "../components/Button"

export const Projects = () => {
    return (
        <div id="projects-container" className="border-t mt-10">
            <h2 id="projects-title" className="text-5xl font-semibold text-accent4 pt-20">My Works</h2>
            <ProjectCardList/>
            {/* <button id="projects-details" className="w-[10vw] h-[3vw] rounded-full text-background-main text-2xl font-medium border-background-main bg-button-background">Details</button> */}
            <Button/>
        </div>
    )
}