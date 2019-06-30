import React, { Component } from 'react';



class AboutMe extends Component {



    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-480x480">
                                <img src="https://media.licdn.com/dms/image/C4E03AQG1idsafUHJmg/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=8xlexssbbPt-p0MIjolJhF8-oj5-vClTejUbJSE5gXw" alt='' />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>I am a life long learner, a lover of complex problems and creative solutions, and a new software developer. I enjoy working in fast-paced environments and am always eager for new challenges. My pas work experience ranges from coal mining to brokering commercial real estate. I have a Bachelors of Science in Mining engineering but have landed on coding because of my love for solving puzzles, building things and the exciting opportunities it presents.</p>
                            </div>
                        </div>
                    </article>
                </div>
                {/* <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title"></p>
                            <figure className="image is-480x480">
                                <img  src="https://media.licdn.com/dms/image/C4E03AQG1idsafUHJmg/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=8xlexssbbPt-p0MIjolJhF8-oj5-vClTejUbJSE5gXw" alt='' />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title"></p>
                            <p>I am a life long learner, a lover of complex problems and creative solutions, and a new software developer. I enjoy working in fast-paced environments and am always eager for new challenges. My pas work experience ranges from coal mining to brokering commercial real estate. I have a Bachelors of Science in Mining engineering but have landed on coding because of my love for solving puzzles, building things and the exciting opportunities it presents.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
};

export default AboutMe;