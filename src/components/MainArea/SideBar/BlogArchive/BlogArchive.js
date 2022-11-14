import React from "react";
import BlogArchiveList from "./BlogArchiveList/BlogArchiveList";

const BlogArchive = (props) => {
    return (
        <ul>
            {props.ArchiveBlogs.map(
                archive => (
                    <BlogArchiveList
                        key={archive.id}
                        archiveDate={archive.archiveDate}
                        archivePostNumber={archive.archivePostNumber}
                    />
                ))}
        </ul>
    );
};

export default BlogArchive;