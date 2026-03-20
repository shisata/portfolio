import { NavLink } from "react-router"
import { Logo } from "../components/Logo"
import { useEffect, useState } from "react"

const threshold = 100; // 100px = navbar-height + 20px for extra spacing

export const Navbar = () => {
    // Handles navbar state up after checkpoint
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold)
        }
        window.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
    
    const links = [
        { name: "Works",to: "/" },
        { name: "About",to: "/about" },
        { name: "Contact",to: "/contact" },
    ]
    return(
        <header id="navbar-container" className="fixed z-10 top-0 left-0 right-0 w-full h-navbar-height overflow-y-hidden"> 
            {/* <nav id="navbar-content" className={`container mx-auto px-50 flex items-center justify-between`} > */}
            <nav id="navbar-content" className={`hidden md:flex items-center justify-between mx-auto px-20 border-2 ${isScrolled? `navbar-compact` : 'navbar-full'}`}>
                <div id="navbar-logo-container">
                    <NavLink to="/" end className="px-2 lg:px-10 py-navbar-height text-lg hover:text-highlight cursor-pointer"><Logo/></NavLink>
                </div>
                <div id="navbar-buttons-container" className="flex items-center">
                    {links.map((link) => {
                        return <NavLink to={link.to} key={link.name} className="px-2 lg:px-10 py-navbar-height text-lg hover:text-highlight cursor-pointer">
                            {link.name}
                        </NavLink>
                    })}
                </div>
                {/* <div id="navbar-download-cv" className="px-10 py-navbar-height text-lg hover:text-highlight cursor-pointer">My CV</div> */}
            </nav>
        </header>
    )
}