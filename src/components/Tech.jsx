import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

// TODO: adjust inview range to match element's height

export const Tech = ({name, logo, position, highlight, ...props}) => {
    const { ref, inView, entry } = useInView({
        threshold: 1,
        rootMargin: "-50% 0% -30% 0%",
    });

    useEffect(() => {
        // inView? console.log(`${name}`) : "";
    }, [inView])
    
    return (
        <div id="tech-container" className={`rounded-4xl w-[70vw] md:w-[50vw] h-[12vh] gap-x-[2vw] mt-[1rem] place-items-center justify-center md:justify-center flex transition ease-in duration-70 ${inView? highlight : ''} ${position}`}>
            <h2 className={`text-5xl font-medium`} ref={ref}>{name}</h2> 
            <img src={logo} alt="" className={`w-[5vw] h-[5vw] saturate-0 ${inView? `saturate-100` : ``}`}/>
        </div>
    )
}