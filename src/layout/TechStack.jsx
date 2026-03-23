import { Tech } from "../components/Tech"
// import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

// Javascript Typescript NodeJS ExpressJS React / Redux Toolkit PostgreSQL MongoDB Tailwind

export const TechStack = () => {
    // const techList = [
    //     {name: "React", logo:"src/assets/React.png", highlight: "text-accent4", position: "pl-[0vw]"},
    //     {name: "Redux", logo:"src/assets/Redux.png", highlight: "text-background-main bg-logo-redux", position: "pl-[10vw]"},
    //     {name: "TypesScript", logo:"src/assets/TypeScript.png", highlight: "text-logo-typescript", position: "pl-[20vw]"},
    //     {name: "Express", logo:"src/assets/Express.png", highlight: "text-background-main bg-text-default", position: "pl-[30vw]"},
    //     {name: "Node.js", logo:"src/assets/Node.js.png", highlight: "text-logo-node", position: "pl-[40vw]"},
    //     {name: "Tailwind", logo:"src/assets/Tailwind CSS.png", highlight: "bg-accent1", position: "pl-[50vw]"},
    //     {name: "PostgreSQL", logo:"src/assets/PostgresSQL.png", highlight: "bg-accent1", position: "pl-[80vw]"},
    //     {name: "MongoDB", logo:"src/assets/MongoDB.png", highlight: "bg-accent1", position: "pl-[2vw]"},
    // ]
    const techList = [
        {name: "React", logo:"src/assets/React.png", highlight: "text-background-main bg-text-default", position: "pr-[15vw]"},
        {name: "Redux", logo:"src/assets/Redux.png", highlight: "text-accent1 bg-text-default", position: "pl-[15vw]"},
        {name: "TypesScript", logo:"src/assets/TypeScript.png", highlight: "text-accent2 bg-text-default", position: "pl-[10vw]"},
        {name: "Express", logo:"src/assets/Express.png", highlight: "text-accent3 bg-text-default", position: "pl-[30vw]"},
        {name: "Node.js", logo:"src/assets/Node.js.png", highlight: "text-accent4 bg-text-default", position: "pl-[25vw]"},
        {name: "Tailwind", logo:"src/assets/Tailwind CSS.png", highlight: "text-accent5 bg-text-default", position: "pl-[10vw]"},
        {name: "PostgreSQL", logo:"src/assets/PostgresSQL.png", highlight: "text-logo-node bg-text-default", position: "pr-[20vw]"},
        {name: "MongoDB", logo:"src/assets/MongoDB.png", highlight: "text-logo-typescript bg-text-default", position: "pl-[2vw]"},
    ]

    return (
        <div id="tech-stack-container" className="md:mt-50 border-t pt-20 min-h-screen bg-neutral">
            {/* <h2 id="tech-stack-title" className="flex font-heading-1 justify-center items-center">My expertise</h2> */}
            <h2 id="tech-stack-title" className={`rounded- flex font-heading-1 text-accent3 justify-center items-center`}>My Expertise</h2>
            <div id="tech-list-container" className="my-[10vh] flex-col">
                {techList.map((element) => {
                    return <Tech key={element.name} name={element.name} logo={element.logo} position={element.position} highlight={element.highlight}/>
                }
            )}
            </div>
        </div>
    )
}