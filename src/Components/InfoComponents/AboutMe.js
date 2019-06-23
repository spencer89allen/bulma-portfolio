import React, { Component } from 'react';



class AboutMe extends Component {



    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-480x480">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>A lifelong learner, a lover of complex problems, a passion for creative solutions, and crazy about code. I'm the type of person who thrives in a fast-paced environment and is always eager to tackle obstacles head on. My work experiences rang from many things: from coal mining to tech support. From engineering research to real estate brockering. I landed on codeing because of my love for solving puzzels, building things and the exciting opportunities it presents.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
};

export default AboutMe;