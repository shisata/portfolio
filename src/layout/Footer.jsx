import { Logo } from "../components/Logo"
import { NavLink } from "react-router"

export const Footer = () => {
    return (
        <div id="footer-container" className="mt-20 w-full h-[30vh] rounded-t-[4rem] border-t-[0.25px] border-text-muted bg-background-lighter relative overflow-hidden">
            <div name="slogan-container" className="absolute left-0 right-0 bottom-[-1rem] sm:bottom-[-1.75rem] lg:bottom-[-2.25rem] text-nowrap">
                <h1 name="footer-slogan" className="text-center text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-side sm:tracking-widest">JOSH TRAN</h1>
                {/* <div className="w-[25%] h-5rem bg-accent2"></div> */}
            </div>
            <div name="contact-info-container" className="">

            </div>
            {/* <NavLink to="/" end><Logo/></NavLink>
            <a href="https://www.linkedin.com/">IN</a>
            <a href="https://github.com/">GH</a>
            <a href="mailto:joshtranwork@gmail.com">E-mail</a>
            <p>Designed & Built by <a href="https://www.linkedin.com/in/joshtranwork/">Josh Tran</a></p> */}
        </div>
    )
}