import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import AboutMe from './InfoComponents/AboutMe';
import Skills from './InfoComponents/Skills';
import Portfolio from './InfoComponents/Portfolio';
import Contact from './InfoComponents/Contact';


class Info extends Component {


    render() {
        return (
            <div>
                

                <div className="tabs is-medium is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/aboutMe'>
                                <p>ABOUT ME</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/skills`}>
                                <p>SKILLS</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/portfolil`}>
                                <p>PORTFOLIO</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/contact`}>
                                <p>CONTACT</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route component={AboutMe} exact path='/aboutMe' />
                        <Route component={Skills} path='/skills' />
                        <Route component={Portfolio} path='/portfolil' />
                        <Route component={Contact} path='/contact' />

                        <Redirect to='/aboutMe'/>

                    </Switch>
                </div>
            </div>
        )
    }
};

export default Info;