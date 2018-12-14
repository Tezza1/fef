import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="container landing-card">
                <div className="row">
                    <div className="col s12">
                        <div className="card hoverable">
                            <div className="card-content">
                                <img  className="landing-logo" src="img/stacked_logo.png" alt="" />
                                <span className="card-title center blue-text"><h2>UI Frameworks</h2></span>
                                <p className="center">A place for web developers to sample UI frameworks and choose the design that best matches their project.</p>
                                <p className="center">Test drive how your project will look in each of the top 5 frameworks. Then select the one that is best for you.</p>
                                <p className="center">Copy and paste code for rapid development. Additionally, learn about the frameworks if it interests you.</p>
                            </div>
                            <div className="card-action">
                                <a className="blue waves-effect waves-light btn btn-large hoverable"><i className="material-icons left">color_lens</i>start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;