import React, { Component } from 'react';

import './Contact.css'

class Contact extends Component {



    render() {
        return (
            <div className='box is-light'>
                <section id="contact">
                    <div className="inner">
                        <h2 className="major">Get in touch</h2>
                        <p>Whether you're a small business owner or the CEO of an international tech empire, I'm always excited for the
				        opporunity to help grow your web presence. If you have any questions, never hesitate to drop me a line!</p>
                        <ul className="contact">
                            <li className="fa-linkedin"><a href="https://www.linkedin.com/in/spencerlallen/">www.linkedin.com/in/spencerlallen/</a></li>
                            <li className="fa-envelope"><a href="mailto:spencerallen77@gmail.com">spencerallen77@gmail.com</a></li>
                            {/* <li className="fa-twitter"><a href="https://twitter.com/thewhitecar_dev">https://twitter.com/thewhitecar_dev</a></li> */}
                            <li className="fa-github"><a href="https://github.com/spencer89allen">https://github.com/spencer89allen</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
};

export default Contact;