import React from 'react';
//import home1 from '../img/home1.png';


const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We Work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                    <div className="hide">
                        <h2>come true.</h2>
                    </div>
                </div>

                <p>Contanct us for any photography or video ideas you have. We have professionals with amazing skills.</p>

                <button>Contact Us</button>
            </div>

            <div className="image">
                {/* <img src={home1} alt="picture" /> */}
            </div>
        </div>
    );
};

export default AboutSection;