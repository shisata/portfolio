import { AboutSummary } from "@/layout/AboutSummary"
import { UnderConstruction } from "@/components/UnderConstruction"
import portraitNoBackgroundUrl from "/src/images/portrait-no-background.png"
import { checkUserIsMobile } from "@/lib/checkUserIsMobile"

const h = (text) => {
  return <span className="bg-accent2 text-background-main">{text}</span>
}

const textbox = () => {
  return <p>
    I’m a Software Systems graduate from {h(`Simon Fraser University`)} in {h(`Canada`)}, currently based in Ho Chi Minh City, Vietnam. I have experience working on {h(`freelance projects`)} where I gathered client requirements, consulted on technical solutions, and developed web applications from concept to deployment. I enjoy building applications that not only look clean and modern but also solve real-world problems. My main focus is on web application development using Node.js, React, and TypeScript. 
  </p>
}

const pictureDefaultColor = checkUserIsMobile() ? `grayscale-0` : `grayscale`
const transitionTime = `transiton-all duration-400`
const heroItemCentering = `absolute mx-auto left-0 right-0`
const commonSloganStyle = `${heroItemCentering} bottom-auto font-black text-center text-7xl sm:text-9xl group-hover:tracking-widest group-hover:translate-y-[-5vh] ${transitionTime}`

export const About = () => {
    return(
      <main className={`px-[5%] min-h-screen`}>
        <div name="heo-section" className={`w-full h-screen flex flex-col items-center`}>
          {/* Container responsible for image and slogan */}
          <div name="slogan-container" className={`w-full lg:w-[60%] h-[50%] lg:h-[70%] relative group`}> 
            <h1 className={`${commonSloganStyle} z-1 top-[30%] sm:top-[20%] xl:top-[40%]`}>ABOUT</h1>
            <h1 className={`${commonSloganStyle} z-3 top-[60%] sm:top-[50%] xl:top-[55%]`}>ME</h1>
            <div className={`${heroItemCentering} z-2 top-auto bottom-0 w-full md:w-[60%] ${transitionTime} group-hover:translate-y-[10vh] group-hover:scale-90`}>
              <img src={portraitNoBackgroundUrl} alt={``} className={`${pictureDefaultColor} group-hover:grayscale-0`}/>
            </div>
            {/* Message box below slogan */}
            <div className={`${heroItemCentering} z-3 top-[95%] w-full min-h-[20rem] h-auto rounded-4xl border-[0.75px] border-text-extra-muted bg-background-lighter flex flex-col items-center justify-center p-[1rem]`}>
              {textbox()}
            </div>
          </div>
        </div>
      </main>
    )
}