import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Top from "./pages/top";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <div className="Main">
            <div className="MenuBar">
                <div className="MenuContainer">
                </div>
            </div>
            <Top />
        </div>
    </React.StrictMode>
);
