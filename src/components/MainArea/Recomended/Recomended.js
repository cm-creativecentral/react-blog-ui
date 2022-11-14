import React from "react";
import { Col } from "react-bootstrap";

const Recomended = (props) => {
    return (
        <Col xl={4} md={6}>
            <div className="single-recomended-post single-blog-list">
                <img src={props.blogImg} alt="Single Blog" />
                <div className="blog-list-meta">
                    <a href="index.html" className="blog-author" alt='blog-author'>
                        <img
                            src={props.authorImg}
                            alt="Blog Author"
                        />
                        <span>{props.authorName}</span>
                    </a>
                    <a href="index.html" className="blog-category" alt='blog-category'>
                        {props.category}
                    </a>
                </div>
                <div className="blog-text">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <a href="index.html" className="blog-list-btn">Read More ...</a>
                </div>
            </div>
        </Col>
    );
};

export default Recomended;