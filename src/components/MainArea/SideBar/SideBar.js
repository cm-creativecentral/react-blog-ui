import React from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons'
import BlogArchive from "./BlogArchive/BlogArchive";
import BlogCategoryList from "./BlogCategoryList/BlogCategoryList";
import RecentPost from "./RecentPost/RecentPost";
import './SideBar.css';
import StickyBox from "react-sticky-box";

const SideBar = (props) => {

    const searchSubmitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Col xl={4}>
            <StickyBox offsetTop={20} offsetBottom={20}>
                <Row className="blog-sidebar">

                    <Col xl={12} md={6}>
                        <div className="sidebar-widget blog-search">
                            <form onSubmit={searchSubmitHandler}>
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search Blog Post"
                                />
                                <button type="submit">
                                    <Icon.Search size={23} className='align-center' />
                                </button>
                            </form>
                        </div>
                    </Col>

                    <Col xl={12} md={6}>
                        <div className="sidebar-widget recent-post">
                            <h3>Recent Post</h3>
                            {props.RecentPosts.map(post => (
                                <RecentPost
                                    key={post.id}
                                    img={post.img}
                                    title={post.title}
                                />
                            ))}
                        </div>
                    </Col>

                    <Col xl={12} md={6}>
                        <div className="sidebar-widget blog-category-list">
                            <h3>Blog Category List</h3>
                            <BlogCategoryList
                                blogCategoryList={props.blogCategoryList}
                            />
                        </div>
                    </Col>

                    <Col xl={12} md={6}>
                        <div className="sidebar-widget blog-archive-list">
                            <h3>Blog Archive</h3>
                            <BlogArchive
                                ArchiveBlogs={props.ArchiveBlogs}
                            />
                        </div>
                    </Col>

                </Row>
            </StickyBox>
        </Col>
    );
};

export default SideBar;