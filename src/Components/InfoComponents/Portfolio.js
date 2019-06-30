import React, { Component } from 'react';



class Portfolio extends Component {



    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Spencer's Library</p>
                                <p>Bacon ipsum dolor amet chicken pork chop landjaeger shankle. Pork chicken brisket meatloaf short ribs prosciutto pork chop tenderloin ham pork belly hamburger. Kevin pork belly brisket jerky sirloin alcatra ham hock prosciutto. Swine venison sausage turkey.</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Phaser 3 Game</p>
                                <p>Bacon ipsum dolor amet chicken pork chop landjaeger shankle. Pork chicken brisket meatloaf short ribs prosciutto pork chop tenderloin ham pork belly hamburger. Kevin pork belly brisket jerky sirloin alcatra ham hock prosciutto. Swine venison sausage turkey.</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Portfolio Piece 3</p>
                                <p>Bacon ipsum dolor amet chicken pork chop landjaeger shankle. Pork chicken brisket meatloaf short ribs prosciutto pork chop tenderloin ham pork belly hamburger. Kevin pork belly brisket jerky sirloin alcatra ham hock prosciutto. Swine venison sausage turkey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Portfolio;