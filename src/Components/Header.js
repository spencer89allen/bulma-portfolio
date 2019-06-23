import React, { Component } from 'react';

import './HeaderStyle.css';

class Header extends Component {



    render() {

        return (
            <div>

                <section className="hero is-medium is-light is-bold">
                    <div className="hero-body heroHeader">
                        <div className="container" >
                            <div className='textContainer'>
                                <h1 className="title titleText"
                                    style={{ color: 'white' }}>
                                    SPENCER ALLEN
                                </h1>
                                <h2 className="subtitle subtitleText"
                                    style={{ color: 'white' }}>
                                    Web Developer
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    };
};

export default Header;