import { ContactLink } from "@/components/ContactLink"

export const Footer = () => {
    return (
        <div id="footer-container" className="mt-20 w-full h-auto rounded-t-[4rem] border-t-[0.25px] border-text-muted bg-background-lighter overflow-hidden flex flex-col justify-between items-center-safe gap-[2rem]">
            {/* <div name="contact-info-container" className="absolute top-0 bottom-auto left-0 right-0 w-full h-2/3 p-[1rem] flex flex-col items-center"> */}
            <div name="contact-info-container" className="w-full h-2/3 p-[1rem] flex flex-col items-center">
                <div name="contact-container" className="">
                    <h2 className="text-accent5 text-xl font-semibold">Contact Me Via</h2>
                    {/* Links */}
                    <div name="links-container" className="mt-[1rem] flex flex-col gap-[0.5rem]">
                        <ContactLink name={"LinkedIn"} logoName={"linkedin"} logoColor={"white"} url={"https://www.linkedin.com/in/joshtranwork/"}/>
                        <ContactLink name={"GitHub"} logoName={"github"} logoColor={"white"} url={"https://github.com/shisata"}/>
                        <ContactLink name={"Zalo"} logoName={"zalo"} logoColor={"white"} url={"https://zalo.me/16043683850"}/>
                        <ContactLink name={"joshtranwork@gmail.com"} logoName={"email"} logoColor={"white"} url={"mailto:joshtranwork@gmail.com"}/>
                    </div>
                </div>
            </div>
            <div name="slogan-container" className="text-nowrap flex flex-col">
                {/* Disclaimer */}
                <p name="disclaimer" className="text-center my-auto">
                    Made with ❤️ by 
                    <a href="https://www.linkedin.com/in/joshtranwork/" target="_blank" rel="noopener noreferrer" 
                        className="text-accent3"> Josh Tran</a> 
                </p>
                {/* Logo slogan */}
                <h1 name="footer-slogan" className="text-center text-5xl tracking-normal sm:text-8xl lg:text-9xl font-black sm:tracking-[0.1em] xl:tracking-[0.3em]">JOSH TRAN</h1>
            </div>

            {/* Previous implememtation of footer logo */}
            {/* <div name="slogan-container" className="absolute left-0 right-0 bottom-[-1rem] sm:bottom-[-1.75rem] lg:bottom-[-2.25rem] text-nowrap">
                <p name="disclaimer" className="text-center my-auto">
                    Made with ❤️ by 
                    <a href="https://www.linkedin.com/in/joshtranwork/" target="_blank" rel="noopener noreferrer" 
                        className="text-accent3"> Josh Tran</a> 
                </p>
                <h1 name="footer-slogan" className="text-center text-5xl tracking-normal sm:text-8xl lg:text-9xl font-extrabold sm:tracking-[0.1em] xl:tracking-[0.3em]">JOSH TRAN</h1>
            </div> */}

            {/* <NavLink to="/" end><Logo/></NavLink>
            <a href="https://www.linkedin.com/">IN</a>
            <a href="https://github.com/">GH</a>
            <a href="mailto:joshtranwork@gmail.com">E-mail</a>
            <p>Designed & Built by <a href="https://www.linkedin.com/in/joshtranwork/">Josh Tran</a></p> */}
            {/* <div name="disclaimer-container" className="absolute inset-0">
                <p className="text-text-default">Made with {`<3`} by Josh Tran </p>
            </div> */}
        </div>
    )
}