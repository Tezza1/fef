import React from 'react';

class HTMLComponents extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h1 className="blue-text darken-5">HTML Components</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Tabbed Card</span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, rem obcaecati. Recusandae laborum, odit commodi
              fuga dolores dolorem, minima hic similique illo, ipsam eos. Perspiciatis omnis voluptas sunt delectus ab?</p>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-width-fixed">
              <li className="tab">
                <a href="#tab1">Tab 1</a>
              </li>
              <li className="tab">
                <a href="#tab2">Tab 2</a>
              </li>
              <li className="tab">
                <a href="#tab3">Tab 3</a>
              </li>
            </ul>
          </div>
          <div className="card-content">
            <div id="tab1">This is the content for tab 1</div>
            <div id="tab2">This is the content for tab 2</div>
            <div id="tab3">This is the content for tab 3</div>
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