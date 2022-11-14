import React from "react";
import './RecentPost.css';

const RecentPost = (props) => {
    return (
        <div className="single-recent-post">
            <a href="/">
                <img src={props.img} alt="Recent Post" />
                <span>{props.title}</span>
            </a>
        </div>
    );
};

export default RecentPost;