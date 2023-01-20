import React, {ReactElement, useCallback, useRef} from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars-2';
import {motion, AnimatePresence} from "framer-motion";
import {useInView} from 'react-intersection-observer';

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
    const [top, topInView] = useInView({
        triggerOnce: false,
        threshold: [0.45, 0.45]
    });
    const refTop = useRef<HTMLDivElement>(null);
    const scrollToTop = useCallback(() => {
        refTop.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [refTop]);

    const [about, aboutInView] = useInView({
        triggerOnce: false,
        threshold: [0.45, 0.45]
    });
    const refAbout = useRef<HTMLDivElement>(null);
    const scrollToAbout = useCallback(() => {
        refAbout.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [refAbout]);

    const [join, joinInView] = useInView({
        triggerOnce: false,
        threshold: [0.45, 0.45]
    });
    const refJoin = useRef<HTMLDivElement>(null);
    const scrollToJoin = useCallback(() => {
        refJoin.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, [refJoin]);

    const links = new Map<string, string>([
        ["Blog", "https://muscari.f5.si/muscari-web/blog/"],
        ["Discord", "https://discord.gg/dPfPqrXJPX"],
        ["Twitter", "https://twitter.com/Muscari_Server"],
        ["Github", "https://github.com/MuscariServer/"],
    ])

    return (
        <div id="Container">
            <nav className="MenuBar">
                <div className="MenuContainer">
                    <div onClick={scrollToAbout} className={aboutInView ? "active" : "inactive"}>About</div>
                    <div onClick={scrollToJoin} className={joinInView ? "active" : "inactive"}>Join</div>
                    <div onClick={() => window.location.href = "/muscari-web/blog/"}>Blog</div>
                </div>
            </nav>
            <div>
                <div ref={top}>
                    <div ref={refTop}><Top/></div>
                </div>
                <div ref={about}>
                    <div ref={refAbout}><Description/></div>
                </div>
                <div ref={join}>
                    <div ref={refJoin}><Join/></div>
                </div>
            </div>
            <div className="ScrollTop" style={{opacity: topInView ? 0 : 1, cursor: topInView ? "default" : "pointer"}}
                 onClick={topInView ? undefined : scrollToTop}>
                <div>↑</div>
            </div>
            <div className="Footer">
                <div className="FooterContents">
                    <div className="FooterContentsList">
                        <ul>
                            <li>
                                <p>リンク</p>
                                <ul className="FooterItem">
                                    {(() => {
                                        const items: Array<ReactElement> = [];
                                        links.forEach((link, title, map) => {
                                            items.push(<li><a href={link}>{title}</a></li>)
                                        });
                                        return <>{items}</>
                                    })()}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <p className="FooterCopyright">© 2023 Muscari Community</p>
                </div>
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
