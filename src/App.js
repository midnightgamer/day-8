import React, {useEffect} from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {gsap, Power2, Expo} from "gsap";
import Home from "./page/Home/Home";
import {AnimatePresence} from "framer-motion";
import Detailed from "./page/Detailed/Detailed";

let tl = gsap.timeline();

function App() {
    useEffect(() => {
        tl.to('.App', {css: {visibility: 'visible'}})

    },[])
    return (
        <div className="App">
            <Router>
                <Header />
                <Route
                    render={({ location }) => (
                        <AnimatePresence initial={false} exitBeforeEnter={true}>
                            <Switch location={location} key={location.pathname}>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <Home  />}
                                />
                                <Route
                                    exact
                                    path="/detailed"
                                    render={() => <Detailed/>}
                                />
                            </Switch>
                        </AnimatePresence>
                    )}
                />
            </Router>
        </div>
    );
}

export default App;
