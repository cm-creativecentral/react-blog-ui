import React from "react";
import * as Icon from 'react-bootstrap-icons'

const Comments = () => {
    return (
        <form>
            <p>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" placeholder="Your Name" />
            </p>
            <p>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" placeholder="Your Email" />
            </p>
            <p>
                <label htmlFor="comment">Comment*</label>
                <textarea
                    id="comment"
                    placeholder="Your Comment"
                ></textarea>
            </p>
            <p>
                <button type="submit">
                    Comment
                    <span><Icon.Send /></span>
                </button>
            </p>
        </form>
    );
};

export default Comments;