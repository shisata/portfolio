import { Hero } from "../../layout/Hero"
import { AboutSummary } from "../../layout/AboutSummary"
import { TechStack } from "../../layout/TechStack"
import { Experience } from "../../layout/Experience"
import { ProjectCardList } from "../../layout/ProjectCardList"
import { Button } from "../../components/Button"

export const Home = () => {
    return(
      <main id="home-container">
        <Hero/>
        {/* <AboutSummary/>
        <TechStack/>
        <Experience/>
        <ProjectCardList/>  */}
      </main>
    )
}