import { react,useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import {ImCross} from "react-icons/im";

const Navbar = (props) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);


    return (
        <header className="w-screen text-gray-600 body-font bg-red-400 nav">
            <div className={showMediaIcons ? "hero" : "container mx-auto flex flex-wrap p-0 lg:p-1 sm:flex-col md:flex-row items-center hero1"}>
            <a className="sm:flex title-font font-medium sm:items-center text-white mb-4 md:mb-0" href="/">
                    <span className="sm:ml-3 text-xl logo-text md:relative md:top-2">LOUIS BRAILLE WELFARE ASSOCIATION</span>
                </a>
                <div className="hamburger-menu md:hidden absolute top-2 right-2">
                    <button className="" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    {showMediaIcons ? <ImCross /> : <GiHamburgerMenu />}
                    </button>
                </div>
                </div>
                <nav className={showMediaIcons ? " grid grid-cols-1" : " md:ml-auto  lg:flex md:flex-wrap  sm:items-center text-base sm:justify-center nav-link hidden md:visible md:p-3"}>
                    <a onClick={() => setShowMediaIcons(false)} href="/" className="sm:mr-5  md:absolute  md:top-3 md:right-96  text-white">
                        Home
                    </a>
                    <a onClick={() => setShowMediaIcons(false)} href="/events" className="sm:mr-5  md:absolute  md:top-3 md:right-72 text-white">
                      Events
                    </a>
                    <a onClick={() => setShowMediaIcons(false)} href="/about" className="sm:mr-5  md:absolute md:top-3 md:right-44 text-white">
                      About Us
                    </a>  
                    <a onClick={() => setShowMediaIcons(false)} href="/contact-us" className="sm:mr-5  md:absolute md:top-3 md:right-16 text-white">
                       Contact Us
                    </a>  
                    
                </nav>
              
        </header>
    );
};

export default Navbar;