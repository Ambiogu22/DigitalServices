import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import PurpleBtn from "./PurpleBtn";

const NavBar = () => {
    return(
        <div className="py-6 px-4 border-[0.5px] border-gray flex justify-between items-center">
            <div className="flex gap-4">
                <Link to="/"><FontAwesomeIcon icon={faBarsStaggered} className="text-xl"/></Link>
                <Link to="/">LOGO</Link>
            </div>
            <div>
                <Link to="/"><PurpleBtn name="Book a Demo" /></Link>
            </div>
        </div>
    )
}

export default NavBar;