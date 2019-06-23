import React, { Component } from 'react';

import './HeaderStyle.css';

class Header extends Component {



    render() {

        return (
            <div>

                <section className="hero is-medium is-light is-bold">
                    <div className="hero-body heroHeader">
                        <div className="container has-text-centered" >
                        <h1 className="title"
                            style={
                                {
                                    color: 'white',
                                    textShadow: '0 1px 3px #0008'
                                }
                            }>
                            <strong>Spencer Allen</strong>
                        </h1>
                        <h2 className="subtitle"
                            style={{ color: 'white' }}>
                            Web Developer
                        </h2>
                        </div>
                    </div>
                </section>

            </div>
        )
    };
};

export default Header;