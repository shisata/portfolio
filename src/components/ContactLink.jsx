import linkedinUrl from "/public/images/linkedin.svg"
import githubUrl from "/public/images/github.svg"
import zaloUrl from "/public/images/zalo.svg"
import emailUrl from "/public/images/mail.svg"

const logos = {
    linkedin: linkedinUrl,
    github: githubUrl,
    zalo: zaloUrl,
    email: emailUrl
}

const logoColors = {
    white: "bg-text-default",
}


export const ContactLink = ({name, logoName, logoColor = "white", url = ""}) => {
    const emailHighlight = `${(logoName == "email")? "underline decoration-accent3-muted group-hover:decoration-accent3 group-hover:bg-accent3 group-hover:text-text-default" : ""}`
    return (
        <a href={url} className="flex gap-x-2 items-center group">
            <img src={logos[logoName]} alt="" className={`w-[1.5rem] h-[1.5rem] p-[0.15rem] rounded-full ${logoColors[logoColor]}`}/>
            <h2 className={`${emailHighlight} text-text-default group-hover:text-accent3 duration-200 transition-all text-[1rem] font-semibold flex gap-2 mb-0`}>{name}</h2>
        </a>
    )
}