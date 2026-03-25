import { NavLink } from "react-router"
import { Logo } from "../components/Logo"
import { useEffect, useState } from "react"
import { FileText } from 'lucide-react';


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

    const glassDisplaySwitcher = `${isScrolled ? `navbar-glass` : `navbar-regular`}`
    return(
        <header id="navbar-container" className="fixed z-1 top-0 left-0 right-0 w-full h-navbar-height overflow-hidden"> 
            {/* Desktop NavBar */}
            <nav id="navbar-desktop-container" className={`hidden md:flex md:justify-around h-full items-center mx-auto px-[2rem] transition-all duration-400 ${isScrolled ? `` : `bg-background-main hover:bg-text-default hover:text-background-main py-[1rem]`}`}>
                {/* Logo Container */}
                <div id="navbar-logo-content" className={`cursor-pointer group flex items-center ${glassDisplaySwitcher}`}>
                    <NavLink to="/" end className={`${/*px-2 lg:px-10*/''} text-2xl font-bold group-hover:text-highlight`}>
                    &gt;JoshTran_
                    </NavLink>
                </div>

                {/* Nav Container */}
                <div id="navbar-main-container" className={`cursor-pointer flex items-center ${glassDisplaySwitcher} ${isScrolled? `gap-1` : `gap-4`}`}>
                    {links.map((link, idx) => {
                        return <NavLink to={link.to} key={idx} className={` px-[1rem] xl:px-[1.5rem] text-xl font-medium hover:text-highlight`}>
                            {link.name}
                        </NavLink>
                    })}
                </div>

                {/* Desktop CTA Container */}
                <div id="navbar-cta-container" className={`cursor-pointer flex gap-x-1 items-center hover:text-highlight ${glassDisplaySwitcher}`}>
                    <FileText/>
                    <a href="https://docs.google.com/document/d/1E5Lgvr97P5Ygb4fQk8dN7t94lE7gxnYI40c8HVVBMrY/edit?usp=drive_link" target="_blank" rel="noopener noreferrer"
                    className={`text-xl font-medium`}>
                    Resume
                    </a>
                </div>
                {/* <div name="navbar-download-cv" className="px-10 py-navbar-height text-lg hover:text-highlight cursor-pointer">My CV</div> */}
            </nav>
            {/* Mobile */}
            <nav></nav>
        </header>
    )
}