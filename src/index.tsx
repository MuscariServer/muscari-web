import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars-2';
import {motion, AnimatePresence} from "framer-motion";

import './index.css';


import Top from "./pages/top";
import Description from "./pages/description";
import Join from "./pages/join";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const hashSave = window.location.hash

setTimeout(() => {
    window.location.hash = ""
    window.location.hash = hashSave
}, 300)

function Main() {
    return (
        <div id="Container">
            <nav className="MenuBar">
                <div className="MenuContainer">
                    <a href="#about">About</a>
                    <a href="#join">Join</a>
                </div>
            </nav>
            <div>
                <Top/>
                <Description/>
                <Join/>
            </div>
        </div>
    );
}

root.render(
    <React.StrictMode>
        <AnimatePresence>
            <motion.div
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 1}}
                transition={{duration: 0.3}}>
                <div className="Main">
                    <Scrollbars style={{width: 'auto', height: '100vh'}}>
                        <Main/>
                    </Scrollbars>
                </div>
            </motion.div>
        </AnimatePresence>
    </React.StrictMode>
);
