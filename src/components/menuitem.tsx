import './menu.css';

import { Link as Scroll } from 'react-scroll';

export const MenuItem = (props: { active: boolean; to: string; text: string}) => {
    return (
        <div className={props.active ? "MenuItem -active" : "MenuItem"}>
            <Scroll to={props.to} smooth={true} duration={500}>
                {props.text}
            </Scroll>
        </div>
    )
}