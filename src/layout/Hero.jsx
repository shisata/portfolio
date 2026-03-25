import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import portraitUrl from "/src/images/portrait.jpg"
import portraitNoBackgroundUrl from "/src/images/portrait-no-background.png"
import { NavLink } from 'react-router';

export const Hero = () => {
    // const commonClass = "text-7xl font-black";
    const commonClass = "font-heading-1";
    const greetingLines = [
        {1: "Hey there,", 2: "my name is"},
        {1: "Xin chào,", 2: "tôi tên là"},
        {1: "नमस्ते,", 2: "मेरा नाम"},
        {1: "Salut,", 2: "je suis"},
        {1: "嗨,", 2: "我叫乔什"},
        {1: "Hola,", 2: "me llamo"},
        {1: "안녕하세요,", 2: "제 이름은"},
        {1: "こんにちは。", 2: "私の名前は"},
        {1: "Привет!", 2: "Меня зовут"},
    ];

    const typewriterArray = greetingLines.map((line) => {
        return `<h1>${line[1]}</h1><h1>${line[2]}</h1>`
    })

    useEffect(() => {
        new Typewriter('#typewriter-container', {
            // strings: ['<h1>Hey there</h1> <h1>my name is</h1>', '<h1>Xin chào</h1> <h1>toi ten la</h1>'],
            strings: typewriterArray,
            cursor: "",
            autoStart: true,
            loop: true,
            delay: 10,
            deleteSpeed: 1,
            pauseFor: 900,
        });
    }, [])

    return(  
        <div id="hero-container" className="min-h-screen p-2 lg:p-20 lg:mx-auto grid grid-cols-1 md:grid-cols-[60%_40%]">
            <div id="slogan-container">
                <div id="typewriter-container" className={`${commonClass} w-full h-100 md:h-40`}></div>
                <h1 className={`${commonClass} text-9xl text-hero-highlight`}>Josh Tran</h1>
                <div id='short-intro' className='mt-10'>
                    <p>
                        //<span className='hover:bg-accent3 cursor-default'> Based in Ho Chi Minh, Vietnam <br/></span>
                        //<span className='hover:bg-accent3 cursor-default'> Full Stack Developer </span>
                    </p>
                </div>
            </div>
            <NavLink to="/about" end id="avatar-container" className="">
                <img src={portraitNoBackgroundUrl} alt={portraitUrl} className=" mr-0 grayscale rounded-4xl hover:bg-background-lighter hover:shadow-xl hover:shadow-text-extra-muted hover:grayscale-0 transition-all duration-300"/>
            </NavLink>
            {/* <div id='typewriter'></div> */}
        </div>
    )
}