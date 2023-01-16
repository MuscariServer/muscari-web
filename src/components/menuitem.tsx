import './menu.css';

import { Link as Scroll } from 'react-scroll';

export const MenuItem = (to: string, text: string, active: boolean) => {
    return (
        <div className={active ? "MenuItem -active" : "MenuItem"}>
            <Scroll to={to} smooth={true} duration={500}>
                {text}
            </Scroll>
        </div>
    )
}