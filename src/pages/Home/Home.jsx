import { Hero } from "../../layout/Hero"
import { AboutSummary } from "../../layout/AboutSummary"
import { TechStack } from "../../layout/TechStack"
import { Experience } from "../../layout/Experience"
import { Projects } from "../../layout/Projects"

export const Home = () => {
    return(
      <main id="home-container" className="px-[5%] md:px-[10%]">
        <Hero/>
        <AboutSummary/> 
        <TechStack/>
        <Projects/> 
      </main>
    )
}