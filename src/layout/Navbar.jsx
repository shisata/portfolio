import { NavLink } from "react-router"
import { Link } from "react-router"

export const Navbar = () => {
    return(
        <nav>
            <div id=""></div>
            <div id="NavButtons">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/experience" end>Experience</NavLink>
                <NavLink to="/about" end>About</NavLink>
            </div>
                <p>
      You've been logged out.{" "}
      <Link to="/">Login again</Link>
    </p>
        </nav>
    )
}