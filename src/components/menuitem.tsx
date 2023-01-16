import './menu.css';

import { Link as Scroll } from 'react-scroll';

export default function MenuItem(to: string, text: string, active: boolean) {
    return (
        <div className={active ? "ActiveMenuItem" : "MenuItem"}>
            <Scroll to={to} smooth={true} duration={500}>
                {text}
            </Scroll>
        </div>
    )
}