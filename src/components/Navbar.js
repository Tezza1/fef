import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_items: [
                {
                    name: 'Overview',
                    link: "#!"
                },
                {
                    name: 'Componets',
                    link: "#!"
                },
                {
                    name: 'Frameworks',
                    link: "#!"
                }
            ]
        };
    }

    render () {
        return (
            <nav className="blue">
                <div className="nav-wrapper">
                    <div className="container">
                        <a href="#!" className="brand-logo left">
                        <img src="img/favicon.ico" alt="" />
                        Front End Fashion
                        </a>
                        <ul id="nav-mobile" className="right hide-on-small-and-down">
                            {this.state.nav_items.map( (item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;