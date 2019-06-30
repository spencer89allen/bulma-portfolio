import React, { Component } from 'react';

import './Contact.css'

class Contact extends Component {



    render() {
        return (
            <div>
                <div className='box is-light'>
                    <section id="contact">
                        <div className="inner">
                            <h2 className="major">Get in touch</h2>
                            <p>Whether you're a small business owner or the CEO of an international tech company, I'm always excited for the
				            opporunity to help grow your web presence. If you have any questions, never hesitate to drop me a line!</p>
                            <p>
                            <strong>Email:   </strong><a href="spencerallen77@gmail.com">spencerallen77@gmail.com</a>
                            <br />
                            <br />
                            <strong>LinkedIn:   </strong><a href="https://www.linkedin.com/in/spencerlallen/">www.linkedin.com/in/spencerlallen/</a>
                            <br />
                            <br />
                            <strong>GitHub:   </strong><a href="https://github.com/">https://github.com/</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
};

export default Contact;