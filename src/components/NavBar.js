import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import PurpleBtn from "./PurpleBtn";
import { useState } from "react";

const NavBar = () => {

    const [openNavbar, setOpenNavbar] = useState(false);

    const handleNavBar = () => {
        setOpenNavbar(!openNavbar);
    }

    return(
        <div className="py-6 px-4 border-[0.5px] border-gray w-screen fixed top-0 z-50 bg-[#FFF]">
            { openNavbar === false ?
                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <Link to="/"><FontAwesomeIcon icon={faBarsStaggered} className="text-xl" onClick={handleNavBar}/></Link>
                        <Link to="/">LOGO</Link>
                    </div>
                    <div>
                        <Link to='/bookADemo'><PurpleBtn name="Book a Demo" /></Link>
                    </div>
                </div>
                :
                <div className="flex flex-col gap-12 h-screen">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 py-[6px]">
                            <Link to="/"><FontAwesomeIcon icon={faX} className="text-xl" onClick={handleNavBar}/></Link>
                            <Link to="/" onClick={handleNavBar}>LOGO</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-10">
                        <div className="flex flex-col gap-8">
                            <Link to='/' className="text-lg font-semibold" onClick={handleNavBar}>Home</Link>
                            <Link to='/products' className="text-lg  font-semibold" onClick={handleNavBar}>Products</Link>
                            <Link to='/pricing' className="text-lg  font-semibold" onClick={handleNavBar}>Pricing</Link>
                            <Link to='/aboutUs' className="text-lg  font-semibold" onClick={handleNavBar}>About Us</Link>
                            <Link to='/contactUs' className="text-lg  font-semibold" onClick={handleNavBar}>Contact Us</Link>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link to='/bookADemo' className="text-lg  font-semibold" onClick={handleNavBar}><PurpleBtn name="Book a Demo"/></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBar;