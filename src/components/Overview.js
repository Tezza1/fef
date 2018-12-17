import React from 'react';
import Header from './Header';
import './css/Overview.css';

class Overview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            frameworks: [
                {
                    name: "Bootstrap 4",
                    image: "img/bootstrap-social-logo.png",
                    alt_text: "Bootstrap 4 logo",
                    description1: "Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
                    description2: "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.",
                    version: "4.1.3",
                    github_stars: "129,370",
                    web_link: "https://getbootstrap.com",
                    github_link: "https://github.com/twbs/bootstrap"
                },
                {
                    name: "Semantic UI",
                    image: "img/semantic-ui.svg",
                    alt_text: "Semantic UI logo",
                    description1: "Design Beautiful Websites Quickly. Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.",
                    description2: "Semantic UI treats words and classes as exchangeable concepts. Classes use syntax from natural languages like noun/modifier relationships, word order, and plurality to link concepts intuitively.",
                    version: "2.4.2",
                    github_stars: "43,847",
                    web_link: "https://semantic-ui.com",
                    github_link: "https://github.com/Semantic-Org/Semantic-UI"
                },
                {
                    name: "Materialize",
                    image: "img/materialize2.png",
                    alt_text: "Materialize logo",
                    description1: "A modern responsive front-end framework based on Material Design.",
                    description2: "Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform. ",
                    version: "0.100.2",
                    github_stars: "34,648",
                    web_link: "https://materializecss.com/",
                    github_link: "https://github.com/Dogfalo/materialize"
                },
                {
                    name: "Bulma",
                    image: "img/bulma2.png",
                    alt_text: "Bulma logo",
                    description1: "Bulma is a free, open source CSS framework based on Flexbox and used by more than 100,000 developers.",
                    description2: "100% responsive, modular, modern and free. The simplest grid system and a growing community. It is so easy to learn and so quick to customize, with no Javascript required so it integrates in any JS environment.",
                    version: "0.7.2",
                    github_stars: "31,803",
                    web_link: "https://bulma.io/",
                    github_link: "https://github.com/jgthms/bulma"
                },
                {
                    name: "Foundation",
                    image: "img/zurb-foundation-icon.jpg",
                    alt_text: "Zurb Foundation logo",
                    description1: "The most advanced responsive front-end framework in the world.",
                    description2: "Foundation is a family of responsive front-end frameworks that make it easy to design beautiful responsive websites, apps and emails that look amazing on any device. Foundation is semantic, readable, flexible, and completely customizable.",
                    version: "6.5.1",
                    github_stars: "27,856",
                    web_link: "https://foundation.zurb.com/",
                    github_link: "https://github.com/zurb/foundation-sites"
                },
                {
                    name: "UIkit",
                    image: "img/uikit.jpg",
                    alt_text: "UIkit logo",
                    description1: "A lightweight and modular front-end framework for developing fast and powerful web interfaces.",
                    description2: "UIKit is also the framework that you'll find yourself use most often when developing iOS applications. It defines the core components of an iOS application, from labels and buttons to table views and navigation controllers.",
                    version: "3.0.0rc25",
                    github_stars: "13,593",
                    web_link: "https://getuikit.com/",
                    github_link: "https://github.com/uikit/uikit"
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <Header header_title="Framework Overview"/>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large blue waves-effect waves-light">
                        <i className="large material-icons">arrow_forward</i>
                    </a>
                </div>
                <div className="container">
                    <div className="row" >
                        {this.state.frameworks.map((framework, index) => {
                            return (
                                <div className="col m4 s12" key={index}>
                                    <div className="card large">
                                        <div className="card-image">
                                            <img src={framework.image} alt={framework.alt_text}/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator">{framework.name}
                                                <i className="material-icons">more_vert</i>
                                            </span>
                                            <div className="chip">
                                                <span className="darken-5"><b>Version:</b></span>  {framework.version}
                                            </div>
                                            <div className="chip">
                                                <i className="material-icons">star</i> <span className="darken-5"><b>Stars:</b></span>  {framework.github_stars}
                                            </div>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title">{framework.name}
                                                <i className="material-icons right">close</i>
                                            </span>
                                            <p>{framework.description1}</p>
                                            <p>{framework.description2}</p>
                                        </div>
                                        <div className="card-action">
                                            <a
                                                className="blue-text"
                                                href={framework.web_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >Website</a>
                                            <a
                                                className="blue-text"
                                                href={framework.github_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >Github</a>
                                        </div>
                                    </div>
                                </div>
                    )})}
                    </div>
                </div>
            </div>
        )
    };
};

export default Overview;
