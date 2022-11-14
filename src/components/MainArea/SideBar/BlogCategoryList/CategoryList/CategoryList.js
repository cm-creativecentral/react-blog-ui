import React from "react";

const CategoryList = (props) => {
    return (
        <li>
            <a href="/">
                {props.title}
            </a>
        </li>
    );
};

export default CategoryList;