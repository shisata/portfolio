import { ProjectCard } from "../components/ProjectCard"
export const ProjectCardList = () => {
    return (
        <div id="card-list" className="mt-10 grid grid-flow-row-dense xl:grid-cols-4 gap-4 place-content-center">
            <ProjectCard spanSize={3}/>
            <ProjectCard spanSize={2}/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}