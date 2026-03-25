import { NavLink } from "react-router"
import { Logo } from "../components/Logo"
import { useEffect, useState } from "react"
import { FileText, Menu, X } from 'lucide-react';



const threshold = 100; // 100px = navbar-height + 20px for extra spacing
const links = [
    { name: "Works",to: "/works" },
    { name: "About",to: "/about" },
    { name: "Contact",to: "/contact" },
]

const resumeLink = `https://drive.google.com/file/d/1wZaDgBntmCO_Ib_hWDbmExiKQ6qeVeqS/view`

export const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Handles navbar state up after checkpoint
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold)
        }
        window.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })
    
    const inactiveNavContainerHover = `${isScrolled ? `` : `bg-background-main hover:bg-text-default hover:text-background-main py-[1rem] group`}`
    const glassDisplaySwitcher = `${isScrolled ? `navbar-glass` : `navbar-regular`}`
    const mobileMenuDisplay = `${isMobileMenuOpen ? `top-navbar-mobile-height` : `top-[-100vh]`}`
    const navbarSeperatorDisplay = `${isMobileMenuOpen ? `border-b-1 border-background-main` : ``}`
    return(
        <header id="navbar-container" className="fixed z-1 top-0 left-0 right-0 w-full h-navbar-height"> 
            {/* Desktop NavBar */}
            <nav id="navbar-desktop-container" className={`hidden md:flex md:justify-around h-full items-center mx-auto px-[2rem] transition-all duration-400 ${inactiveNavContainerHover}`}>
                {/* Logo Container */}
                <div id="navbar-logo-content" className={`cursor-pointer flex items-center ${glassDisplaySwitcher}`}>
                    <NavLink to="/" end className={`text-2xl font-bold hover:text-highlight`}>
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
                <div id="navbar-cta-container" className={`cursor-pointer flex gap-x-1 items-center hover:text-highlight ${glassDisplaySwitcher} ${isScrolled ? `` : `text-accent3 group-hover:text-background-main`}`}>
                    <FileText/>
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer"
                    className={`text-xl font-medium`}>
                    Resume
                    </a>
                </div>
            </nav>
            {/* Mobile */}
            <nav id="navbar-mobile-container" className={`z-20 md:hidden flex justify-between h-navbar-mobile-height items-center bg-text-default relative ${navbarSeperatorDisplay}`}>
                {/* Logo Container */}
                <div id="navbar-logo-content" className={`flex items-center navbar-regular`}>
                    <NavLink to="/" end onClick={() => {setMobileMenuOpen(false)}}
                    className={`text-2xl font-bold text-background-main`}>
                    &gt;JoshTran_
                    </NavLink>
                </div>
                {/* Menu Button Container */}
                <div id="navbar-mobile-menu-button" 
                    className={`flex items-center navbar-regular text-background-main`}
                    onClick={() => {setMobileMenuOpen((prev) => !prev)}}>
                    { isMobileMenuOpen ? <X/> : <Menu/>}
                </div>
            </nav>
            {/* Mobile Full Menu */}
            <div id="navbar-mobile-menu" className={`md:hidden z-1 bg-text-default absolute bottom-auto left-0 right-0 w-full h-[30vh] ${mobileMenuDisplay} transition-all duration-200 flex flex-col gap-[1rem] p-[1rem] underline text-xl font-medium text-background-main`}>
                {links.map((link, idx) => {
                    return <NavLink to={link.to} key={idx} className={``} onClick={() => {setMobileMenuOpen(false)}}>
                        {link.name}
                    </NavLink>
                })}
                <div className="flex gap-1 underline items-end-safe">
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" onClick={() => {setMobileMenuOpen(false)}}
                    className={`bg-accent3`}>
                    Resume
                    </a>
                    <FileText/>
                </div>
            </div>
        </header>
    )
}