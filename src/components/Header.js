import React from 'react';
import './css/Header.css';

const Header = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="blue-text darken-5 overview-header">{props.header_title}</h1>
                </div>
            </div>
        </div>
    )
};

export default Header;
