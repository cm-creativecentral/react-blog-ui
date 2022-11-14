import React from "react";
import CategoryList from "./CategoryList/CategoryList";

const BlogCategoryList = (props) => {
    return (
        <ul>
            {props.blogCategoryList.map(
                list => (
                    <CategoryList
                        key={list.id}
                        title={list.title}
                    />
                )
            )}
        </ul>
    );
};

export default BlogCategoryList;