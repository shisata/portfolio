import { CardList } from "./CardList"
import { Button } from "../components/Button"

export const Projects = () => {
    return (
        <div id="projects-container">
            <h2 id="projects-title" className="font-heading-1 border-t-2 pt-20">My Works</h2>
            <CardList/>
            {/* <button id="projects-details" className="w-[10vw] h-[3vw] rounded-full text-background-main text-2xl font-medium border-background-main bg-button-background">Details</button> */}
            <Button/>
        </div>
    )
}