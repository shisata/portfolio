import { useEffect } from "react"
import { Laptop, Brush, AppWindow } from 'lucide-react';

export const RoleCard = ({header, colorNum, content, logoName, ...props}) => {
    const color = {
        1 : `text-accent1`,
        2 : `text-accent2`,
        3 : `text-accent3`
    }

    const logo = {
        laptop : <Laptop size={"3rem"} className={color[colorNum]}/>,
        brush: <Brush size={"3rem"} className={color[colorNum]}/>,
        appWindow: <AppWindow size={"3rem"} className={color[colorNum]}/>,
    }

    useEffect(() => {
    }, [])

    return (
        <div className={`w-[20rem] h-[40vh] border-[0.5px] border-text-extra-muted px-[1rem] py-[2rem] rounded-xl bg-card1 flex-col place-content-end-safe`}>    
            <div name="highlighter-container" className="my-[0.5rem]">
                {logo[logoName]}
                <h4 className={`${color[colorNum]} text-xl font-semibold`}>{header}</h4>
            </div>    
            <p className="text-base/tight ">{content}</p>
        </div>
    )
}