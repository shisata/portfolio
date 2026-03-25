import { Tech } from "../components/Tech"
import reactUrl from "/src/images/React.png"
import reduxUrl from "/src/images/Redux.png"
import javascriptUrl from "/src/images/JavaScript.png"
import express from "/src/images/Express.png"
import nodejsUrl from "/src/images/Node.js.png"
import tailwindUrl from "/src/images/Tailwind CSS.png"
import postgresqlUrl from "/src/images/PostgresSQL.png"
import mongodbUrl from "/src/images/MongoDB.png"
import typescriptUrl from "/src/images/TypeScript.png"


// Javascript Typescript NodeJS ExpressJS React / Redux Toolkit PostgreSQL MongoDB Tailwind

export const TechStack = () => {
    const techList = [
        {name: "React", logo: reactUrl, highlight: "text-logo-react border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pr-[15vw]"},
        {name: "Redux", logo: reduxUrl, highlight: "text-logo-redux border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[10vw]"},
        {name: "TypesScript", logo: typescriptUrl, highlight: "text-logo-typescript border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[5vw]"},
        {name: "JavaScript", logo: javascriptUrl, highlight: "text-logo-javascript border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[10vw]"},
        {name: "Express", logo: express, highlight: "text-logo-express border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[30vw]"},
        {name: "Node.js", logo: nodejsUrl, highlight: "text-logo-nodejs border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[25vw]"},
        {name: "Tailwind", logo: tailwindUrl, highlight: "text-logo-tailwind border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[10vw]"},
        {name: "PostgreSQL", logo: postgresqlUrl, highlight: "text-logo-postgresql border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pr-[15vw]"},
        {name: "MongoDB", logo: mongodbUrl, highlight: "text-logo-mongodb border-l-[0.5rem] lg:border-l-[2rem]", position: "md:pl-[2vw]"},
    ]

    return (
        <div id="tech-stack-container" className="mt-[5rem] md:mt-[10rem] border-t-[0.75px] pt-20 min-h-screen bg-neutral flex flex-col items-center">
            {/* Display container */}
            <div className="w-[95%] h-[95%] border-[0.75px] rounded-4xl relative flex flex-col items-center">
                {/* <h2 id="tech-stack-title" className="flex font-heading-1 justify-center items-center">My expertise</h2> */}
                {/* <h2 id="tech-stack-title" className={`flex font-heading-1 text-accent3 justify-center items-center`}>My Expertise</h2> */}
                <h2 id="tech-stack-title" className={`text-wrap font-heading-1 text-accent3 px-[1rem] bg-background-main mt-[-1.5rem] lg:mt-[-2rem] lg:tracking-wide`}>My Expertise</h2>
                <div id="tech-list-container" className="my-[10vh] flex-col place-items-center">
                    {techList.map((element, idx) => {
                        return <Tech key={idx} name={element.name} logo={element.logo} position={element.position} highlight={element.highlight}/>
                    }
                )}
                </div>
            </div>
        </div>
    )
}