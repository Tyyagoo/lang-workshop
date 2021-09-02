import React from 'react'
import './index.css'

interface HeaderProps {
    transparency: boolean;
}

const Header: React.FC<HeaderProps> = ( {transparency} ) => {
    return (
        <header className={transparency ? '' : 'black'}>
            <div className="header--logo">
                <a href="/" draggable="false">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="netflix"
                    draggable="false"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/profile" draggable="false">
                    <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                    alt="user_profile_photo"
                    draggable="false"/>
                </a>
            </div>
        </header>
    )
};

export default Header;
