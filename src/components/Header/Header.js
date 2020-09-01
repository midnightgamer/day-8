import React from 'react';
import {Link} from "react-router-dom";
import {Power2} from "gsap";
import {motion} from "framer-motion";


let transition ={duration:.8, ease:Power2.easeInOut,delay:.8};
const Header = () => {
    return (
        <motion.header exit={{y:20,opacity:0}} transition={{...transition,delay:.2}}>
            <div className="header-inner">
                <div className="logo">
                    <Link to={'/'}>
                        Ospace
                    </Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to={'/shop'}>
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to={'/resources'}>
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
