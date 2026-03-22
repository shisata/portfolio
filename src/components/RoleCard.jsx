import { useEffect } from "react"
import { Laptop, Brush, AppWindow } from 'lucide-react';

export const RoleCard = ({header, colorNum, content, logoName, ...props}) => {
    const color = {
        1 : "#A374FF",
        2 : "#20D3BD",
        3 : "#dc5603"
    }
    const logo = {
        laptop : <Laptop size={"3rem"} color={color[colorNum]}/>,
        brush: <Brush size={"3rem"} color={color[colorNum]}/>,
        appWindow: <AppWindow size={"3rem"} color={color[colorNum]}/>,
    }

    const headerColor = () =>  `text-[` + color[colorNum] + `]`


    useEffect(() => {
    }, [])

    return (
        <div className={`w-[20rem] h-[40vh] border-[0.5px] border-text-extra-muted px-[1rem] py-[2rem] rounded-xl bg-card1 flex-col place-content-end-safe`}>    
            <div name="highlighter-container" className="my-[0.5rem]">
                {logo[logoName]}
                <h4 className={`${headerColor()} text-lg font-semibold`}>{header}</h4>
            </div>    
            <p className="text-base/tight ">{content}</p>
        </div>
    )
}