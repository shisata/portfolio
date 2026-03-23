import { ProjectCard } from "../components/ProjectCard"
export const ProjectCardList = () => {
    return (
        <div id="card-list" className="mt-10 grid grid-flow-row-dense xl:grid-cols-4 gap-4 place-content-center">
            <ProjectCard spanSize={3} image={"src/assets/img1.jpg"}/>
            <ProjectCard spanSize={2} image={"src/assets/img1.jpg"}/>
            <ProjectCard image={"src/assets/img1.jpg"}/>
            <ProjectCard image={"src/assets/img1.jpg"}/>
            <ProjectCard image={"src/assets/img1.jpg"}/>
            <ProjectCard image={"src/assets/img1.jpg"}/>
            <ProjectCard image={"src/assets/img1.jpg"}/>
        </div>
    )
}