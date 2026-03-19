// Note: make button magnet

export const Button = ({className = "", size = "default", children, ...props}) => {

    const baseClasses = "relative flex overflow-hidden rounded-full items-center justify-center gap-2 bg-background-button";
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        // default: "",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
        <button className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}