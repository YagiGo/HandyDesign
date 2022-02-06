import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import Style from './CircularNavigation.module.scss';
import {
    faAddressBook,
    faCamera,
    faCog,
    faEnvelope,
    faGamepad,
    faHome,
    faPlus,
    faUser,
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import {CSSProperties, useState} from "react";

const CircularNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const active = showMenu ? `${Style.menu} ${Style.active}` : `${Style.menu}`
    return (
        <div className={active}>
            <div className='toggle' onClick={()=>setShowMenu(!showMenu)}>
                <FA className='fa-lg' icon={faPlus}/>
            </div>
            <li style={{'--i': 0} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faHome} />
                </a>
            </li>
            <li style={{'--i': 1} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faUser} />
                </a>
            </li>
            <li style={{'--i': 2} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faCog} />
                </a>
            </li>
            <li style={{'--i': 3} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faEnvelope} />
                </a>
            </li>
            <li style={{'--i': 4} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faCamera} />
                </a>
            </li>
            <li style={{'--i': 5} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faGamepad} />
                </a>
            </li>
            <li style={{'--i': 6} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faVideo} />
                </a>
            </li>
            <li style={{'--i': 7} as CSSProperties} >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#'>
                    <FA icon={faAddressBook} />
                </a>
            </li>
        </div>
    )
}


export default CircularNavigation;