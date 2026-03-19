import { Tech } from "../components/Tech"

// Javascript Typescript NodeJS ExpressJS React / Redux Toolkit PostgreSQL MongoDB Tailwind

export const TechStack = () => {
    return (
        <div id="tech-stack-container" className="border-t-2 pt-5 min-h-screen bg-neutral">
            <h2 id="tech-stack-title" className="flex font-heading-1 justify-center items-center">My expertise</h2>
            <div id="tech-list-container" className="grid-cols-1 grid-flow-col">
                <Tech name="React" logo="src/assets/react.svg"/>
                <Tech name="Typescript" logo="src/assets/react.svg"/>
                <Tech name="ExpressJS" logo="src/assets/react.svg"/>
            </div>
        </div>
    )
}