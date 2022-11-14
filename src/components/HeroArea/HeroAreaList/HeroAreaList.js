import React from "react";

const HeroAreaList = (props) => {
    return (
        <div className="single-feature-post">
            <img src={props.hero} alt="hero" />
            <div className="feature-text-wrapper">
                <div className="feature-text">
                    <h2>{props.title}</h2>
                    <p>
                        {props.desc}
                    </p>
                    <a className='feature-post-btn' href="blog-details.html">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default HeroAreaList;