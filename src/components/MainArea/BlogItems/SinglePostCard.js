import React from "react";
import { Col } from "react-bootstrap";
import './SinglePostCard.css';
import { Link } from 'react-router-dom';

const SinglePostCard = (props) => {
    return (
        <Col xl={6} md={6}>
            <Link
                className="blogItem-link"
                to={`/blog/${props.id}`}
            >
                <div className="single-blog-list">
                    <img src={props.coverImg} alt="Single Blog" />
                    <div className="blog-list-meta">
                        <a href="index.html" className="blog-author">
                            <img src={props.authorImg} alt="Blog Author" />
                            <span>{props.authorName}</span>
                        </a>
                        <a href="index.html" className="blog-category">{props.language}</a>
                    </div>
                    <div className="blog-text">
                        <h3>{props.blogTextH3}</h3>
                        <p>{props.blogTextP}</p>
                        <a href="index.html" className="blog-list-btn">Read More...</a>
                    </div>
                </div>
            </Link>
        </Col>
    )
};


export default SinglePostCard;