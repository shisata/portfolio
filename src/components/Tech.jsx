export const Tech = ({name, logo, ...props}) => {
    return (
        <div id="tech-container" className="flex">
            <h2 className="font-heading-2">{name}</h2> 
             <img src={logo} alt="" />
        </div>
    )
}