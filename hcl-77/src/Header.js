import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </div>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
            </div>
        </div>
    )
}

export default Header

