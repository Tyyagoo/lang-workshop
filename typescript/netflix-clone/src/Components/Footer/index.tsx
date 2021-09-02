import React from 'react'
import './index.css'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            Feito com <span role="img" aria-label="angry">😡</span> por @Tyyago <br/>
            Todos direitos de imagens pertencem a seus respectivos donos. <br/>
            <a href="https://youtu.be/tBweoUiMsDg" draggable="false">React4Noobs</a>
        </footer>
    )
};

export default Footer;