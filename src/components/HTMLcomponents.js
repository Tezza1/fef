import React from 'react';
import Header from './Header';
import './css/HTMLcomponents.css';

class HTMLComponents extends React.Component {
    render() {
        return(
            <div>
                <Header header_title="HTML Components"/>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large blue">
                        <i className="large material-icons">arrow_forward</i>
                    </a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card large">
                                <div className="card-content">
                                    <span className="card-title blue-text">Select Items</span>
                                    <p className="form-explanation">Maximum of 5 components.</p>
                                    <form>
                                        <p>
                                            <input type="checkbox" name="item" id="typo" />
                                            <label htmlFor="typo">Typography</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="colors" />
                                            <label htmlFor="colors">Colors</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="button" />
                                            <label htmlFor="button">Button</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="navbar" />
                                            <label htmlFor="navbar">Navbar</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="breadcrumbs" />
                                            <label htmlFor="breadcrumbs">Breadcrumbs</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="form" />
                                            <label htmlFor="form">Form</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="card" />
                                            <label htmlFor="card">Card</label>
                                        </p>
                                        <p>
                                            <input type="checkbox" name="item" id="tables" />
                                            <label htmlFor="tables">Table</label>
                                        </p>
                                        <p className="blue-text center">2 / 5 components selected</p>
                                        <div className="card-action">
                                            <div>
                                                <button className="btn btn-large red waves-effect waves-light">Cancel</button>
                                            </div>
                                            <div>
                                                <input type="submit" value="Submit" className="btn btn-large blue waves-effect waves-light submit-button" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card medium">
                                <div className="card-content">
                                    <span className="card-title">Button</span>
                                    <iframe src="iframe-button.html" title="iframe-button">
                                    </iframe>
                                </div>
                                <div className="card-tabs">
                                    <ul className="tabs tabs-width-fixed">
                                        <li className="tab">
                                            <a href="#tab1">w3schools</a>
                                        </li>
                                        <li className="tab">
                                            <a href="#tab2">MDN</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-content">
                                    <div id="tab1">This is the content for tab 1</div>
                                    <div id="tab2">This is the content for tab 2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default HTMLComponents;
