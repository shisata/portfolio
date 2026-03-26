import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// TODO: adjust inview range to match element's height

export const Tech = ({name, logo, position, highlight, ...props}) => {
    // Check if element is within viewport set range
    const { ref, inView, entry } = useInView({
        threshold: 1,
        rootMargin: "-50% 0% -30% 0%",
    });

    useEffect(() => {
        // inView? console.log(`${name}`) : "";
    }, [inView])
    
    const expressLogoStyling = `${(name == "Express") ? "bg-logo-express" : ""}`

    return (
        <div id="tech-container" className={`w-[70vw] md:w-[50vw] h-[12vh] gap-x-[2vw] mt-[1rem] place-items-center justify-center flex transition ease-in duration-30 ${inView? highlight : 'text-text-muted'} ${position}`}>
            <h2 className={`text-3xl lg:text-5xl :font-medium`} ref={ref}>{name}</h2> 
            <img src={logo} alt="" className={`w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] saturate-0  ${inView? `saturate-100` : ``} ${expressLogoStyling}`}/>
        </div>
    )
}