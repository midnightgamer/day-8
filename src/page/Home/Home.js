import React, {useEffect} from 'react';
import '../../App.scss';
import img from "../../assets/desk-room-chair-interior-minimalist-simple-minimal-wallpaper-preview.jpg";
import {Link} from "react-router-dom";
import {Expo, gsap, Power2} from "gsap";
import {motion} from "framer-motion";


let tl = gsap.timeline();
let transition ={duration:.8, ease:Power2.easeInOut,delay:.8};
const Home = () => {
    useEffect(() => {
        tl.to('.App', {css: {visibility: 'visible'}})
            .from('.col-left', {duration: 1, width: 0, ease: Expo.easeInOut})
            .from('.col-right', {duration: 1, width: 0, ease: Expo.easeInOut})
            .from('.img-container', {duration: 1, width: 0, ease: Expo.easeInOut})
            .fromTo(' img', {duration: 1, width: '0%'}, {width: '100%', ease: Expo.easeInOut})
            .from('header', {duration: .6, y: 20, opacity: 0, ease: Power2.easeInOut,})
            .from('.intro', {duration: .6, y: 20, opacity: 0, ease: Power2.easeInOut})
            .from('.line span', {duration: 1.3, y: 120, ease: Power2.easeInOut, stagger: -.2})
            .from('.lead-text span', {duration: .8, y: 20, opacity: 0, ease: Expo.easeOut, stagger: .2})
            .from('.hero-text .cta p', {duration: .6, y: 20, opacity: 0, ease: Power2.easeInOut,})
            .from('.pagination span', {duration: .8, y: 20, opacity: 0, ease: Expo.easeOut, stagger: .2})

    },[])
    return (
        <main className="main">
            <div className="row">
                <motion.div className="col-left" exit={{width: '50%'}}
                transition={{...transition, delay:2.8}}>
                    <div className="hero-text">
                            <motion.span className={'intro'} exit={{y:20,opacity:0}} transition={transition}>
                                Interior designer
                            </motion.span>
                        <h2>
                            <div className="line">
                                    <motion.span exit={{y:120}} transition={{duration:.8, ease:Power2.easeInOut,delay:.8}}>
                                        Boutique
                                    </motion.span>
                            </div>
                            <div className="line">
                                    <motion.span className={'bold'} exit={{y:120}} transition={{duration:.8 , ease:Power2.easeInOut,delay:1.2}}>
                                        Studio
                                    </motion.span>
                            </div>
                        </h2>
                        <motion.p className="lead-text" exit={{y:20,opacity:0}} transition={{...transition,delay:1.6}}>
                                <span>
                                    Contact us for experts
                                </span>
                            <span>
                                    home evaluations.
                                </span>
                        </motion.p>
                        <Link className={'cta'} to={'/get-in-touch'} >
                            <motion.p exit={{y:20,opacity:0}} transition={{...transition,delay:2}}>
                                Get in touch
                            </motion.p>
                        </Link>
                    </div>
                </motion.div>
                <motion.div className="col-right" exit={{width: '50%'}} transition={{...transition, delay: 2.8}}>
                    <motion.div className="img-container"  transition={{...transition, delay: 2.5}}>
                        <Link to={'/detailed'}>
                            <img src={img} alt=""/>
                        </Link>
                    </motion.div>
                    <motion.div className="pagination"  exit={{x:20,opacity:0}} transition={{...transition,delay:2.3}}>
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default Home;
