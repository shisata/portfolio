import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// TODO: adjust inview range to match element's height

export const Tech = ({name, logo, position, highlight, ...props}) => {
    const { ref, inView, entry } = useInView({
        threshold: 1,
        rootMargin: "-35% 0% -30% 0%",
    });

    useEffect(() => {
        inView? console.log(`${name}`) : "";
    }, [inView])
    
    return (
        <div id="tech-container" className={`h-[15vh] gap-x-[2vw] justify-center  md:justify-start flex transition ease-in duration-70 ${inView? highlight : ''}`}>
            <h2 className={`text-7xl font-bold`} ref={ref}>{name}</h2> 
            <img src={logo} alt="" className={`w-[5vw] h-[5vw] saturate-0 ${inView? `saturate-100` : ``}`}/>
        </div>
    )
}