import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars-2';
import {AnimatePresence} from "framer-motion";
import {motion} from "framer-motion";

import './index.css';

import {MenuItem} from "./components/menuitem";

import Top from "./pages/top";
import Description from "./pages/description";
import Join from "./pages/join";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <AnimatePresence>
            <motion.div
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 1}}
                transition={{duration: 0.3}}>
                <div className="Main">
                    <div className="MenuBar">
                        <div className="MenuContainer">
                            <MenuItem to="about" text="About" active={false} />
                            <MenuItem to="join" text="Join" active={false} />
                        </div>
                    </div>
                    <Scrollbars style={{width: '100vw', height: '100vh'}}>
                        <Top/>
                        <Description/>
                        <Join />
                    </Scrollbars>
                </div>
            </motion.div>
        </AnimatePresence>
    </React.StrictMode>
);
