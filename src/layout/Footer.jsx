import { Logo } from "../components/Logo"
import { NavLink } from "react-router"

export const Footer = () => {
    return (
        <div id="footer-container" className="absolute bottom-0 mb-0 mt-auto">
            <NavLink to="/" end><Logo/></NavLink>
            <a href="https://www.linkedin.com/">IN</a>
            <a href="https://github.com/">GH</a>
            <a href="mailto:joshtranwork@gmail.com">E-mail</a>
            <p>Designed & Built by <a href="https://www.linkedin.com/in/joshtranwork/">Josh Tran</a></p>
        </div>
    )
}