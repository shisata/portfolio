import { UnderConstruction } from "@/components/UnderConstruction"
import { Experience } from "../../layout/Experience"
import { Projects } from "../../layout/Projects"

export const Works = () => {
    return(
      <main className={`min-h-screen px-[5%]`}>
        <UnderConstruction/>
        <Experience/>
        <Projects/>
      </main>
    )
}