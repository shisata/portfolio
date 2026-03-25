import { Tech } from "../components/Tech"

// Javascript Typescript NodeJS ExpressJS React / Redux Toolkit PostgreSQL MongoDB Tailwind

export const TechStack = () => {
    const techList = [
        {name: "React", logo:"src/assets/React.png", highlight: "text-background-main bg-text-default", position: "pr-[15vw]"},
        {name: "Redux", logo:"src/assets/Redux.png", highlight: "text-accent1 bg-text-default", position: "pl-[15vw]"},
        // {name: "TypesScript", logo:"src/assets/TypeScript.png", highlight: "text-accent2 bg-text-default", position: "pl-[10vw]"},
        {name: "JavaScript", logo:"src/assets/JavaScript.png", highlight: "text-accent2 bg-text-default", position: "pl-[10vw]"},
        {name: "Express", logo:"src/assets/Express.png", highlight: "text-accent3 bg-text-default", position: "pl-[30vw]"},
        {name: "Node.js", logo:"src/assets/Node.js.png", highlight: "text-accent4 bg-text-default", position: "pl-[25vw]"},
        {name: "Tailwind", logo:"src/assets/Tailwind CSS.png", highlight: "text-accent5 bg-text-default", position: "pl-[10vw]"},
        {name: "PostgreSQL", logo:"src/assets/PostgresSQL.png", highlight: "text-logo-node bg-text-default", position: "pr-[20vw]"},
        {name: "MongoDB", logo:"src/assets/MongoDB.png", highlight: "text-logo-typescript bg-text-default", position: "pl-[2vw]"},
    ]

    return (
        <div id="tech-stack-container" className="md:mt-[10rem] border-t-[0.75px] pt-20 min-h-screen bg-neutral">
            {/* <h2 id="tech-stack-title" className="flex font-heading-1 justify-center items-center">My expertise</h2> */}
            <h2 id="tech-stack-title" className={`rounded- flex font-heading-1 text-accent3 justify-center items-center`}>My Expertise</h2>
            <div id="tech-list-container" className="my-[10vh] flex-col place-items-center">
                {techList.map((element, idx) => {
                    return <Tech key={idx} name={element.name} logo={element.logo} position={element.position} highlight={element.highlight}/>
                }
            )}
            </div>
        </div>
    )
}