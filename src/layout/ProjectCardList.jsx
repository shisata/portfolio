import { ProjectCard } from "../components/ProjectCard"

export const ProjectCardList = () => {

    return (
        <div id="card-list-container">
            <h2 id="card-list-title">My Works</h2>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <button id="card-list-detail-button">Details</button>
        </div>
    )
}