import React from "react";

const BlogArchiveList = (props) => {
    return (
        <li>
            <a href="/">
                <span className="archive-date">{props.archiveDate}</span>
                <span className="archive-post-number">{props.archivePostNumber}</span>
            </a>
        </li>
    );
};

export default BlogArchiveList;