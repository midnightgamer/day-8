import React from 'react';
import img from "../../assets/desk-room-chair-interior-minimalist-simple-minimal-wallpaper-preview.jpg";
import {Link} from "react-router-dom";
import {Power2} from "gsap";
import {motion} from "framer-motion";


let transition = {duration: .8, ease: Power2.easeInOut, delay: .8};
const Detailed = () => {
    return (
        <div className={'row'}>
            <motion.div className="col-left" initial={{width: '50%'}} animate={{width: '50%'}} exit={{width:'65%'}}>
                <div className="hero-text">
                    <h2>
                        <div className="line">
                            <motion.span initial={{y:120}} exit={{y:120}}   animate={{y:0}}transition={{duration:.8, ease:Power2.easeInOut,delay:.8}}>
                                Boutique
                            </motion.span>
                        </div>
                        <div className="line">
                            <motion.span className={'bold'} initial={{y:120}} exit={{y:120}}  animate={{y:0}} transition={{duration:.8 , ease:Power2.easeInOut,delay:1.2}}>
                                Studio
                            </motion.span>
                        </div>
                    </h2>
                </div>
            </motion.div>
            <motion.div className="col-right" initial={{width: '50%'}} animate={{width: '50%'}} exit={{width:'35%'}}>
                <motion.div className="img-container"
                            animate={{height: '80%'}}
                            exit={{height:'450px',width:'750px'}}
                            transition={{...transition, delay: 1}}>
                    <Link to={'/detailed'}>
                        <img src={img} alt=""/>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Detailed;
