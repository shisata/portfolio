import { RoleCard } from "../components/RoleCard"
import { Button } from "../components/Button"
import { Laptop, Brush, AppWindow } from 'lucide-react';

// Note: Use Variable Proximity (react bits) for paragraph
// const introduction = "I'm a full-stack developer currently in Vietnam";

export const AboutSummary = () => {
    const cardList = [
        {header: "Software Dev",colorNum: 1, content: "I love transforming business ideas into digital solution.",  logoName: "laptop"},
        {header: "UI & UX",colorNum: 2, content: "Passionate about designing interface that is enjoyable to use.",  logoName: "brush"},
        {header: "Frontend Dev",colorNum: 3, content: "Bringing vison to life with the latest technology and design trend.",  logoName: "appWindow"},
    ]

    return ( 
        <div id="about-summary-container" className="pt-10 border-t grid-flow-row">
            <h2 id="about-summary-title" className="font-heading-3 text-accent1 chat-bubble-cursor">What I Do</h2>
            <div id="roles-list-container" className="pt-[10vh] role-grid-container">
                {cardList.map((item, idx) => {
                    // return <RoleCard key={item.header} header={item.header} colorNum={item.colorNum} content={item.content} logoName={item.logoName}/>
                    return <RoleCard key={idx} header={item.header} colorNum={item.colorNum} content={item.content} logoName={item.logoName}> </RoleCard>
                })}
            </div>
            <Button className={`justify-self-end mt-[5rem] md:mx-[1rem]`} content={`About Me`}/>
        </div>
    )
}