/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router';
import Header from "../../components/Header/Header";
import Comments from "./Comments/Comments";
import Recomended from "../../components/MainArea/Recomended/Recomended";
import './Blog.css';
import SideBar from "../../components/MainArea/SideBar/SideBar";
import { BlogData, RecentPosts, blogCategoryList, ArchiveBlogs, RecomendedData } from '../../data/BlogData';
import Footer from "../../components/Footer/Footer";

const Blog = (props) => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [recentPosts, setRecentPosts] = useState(RecentPosts);
    const [BlogCategoryList, setBlogCategoryList] = useState(blogCategoryList);
    const [archiveBlogs, setArchiveBlogs] = useState(ArchiveBlogs);
    const [recomendedData, setRecomendedData] = useState(RecomendedData);

    useEffect(() => {
        let blog = BlogData.find(
            (blog) => blog.id === parseInt(id)
        );
        if (blog) {
            setBlog(blog);
        }
    }, [id]);

    return (
        <Fragment>
            <Header />
            {
                blog && (
                    <>
                        <main>
                            <section className="blog-list-sidebar-area">
                                <Container>
                                    <Row>

                                        <Col xl={8}>
                                            <div className="blog-details">
                                                <img src={blog.coverImg} alt="" />
                                                <div className="blog-list-meta">
                                                    <a href="/" className="blog-author">
                                                        <img
                                                            src={blog.authorImg}
                                                            alt="Blog Author"
                                                        />
                                                        <span>{blog.authorName}</span>
                                                    </a>
                                                    <a href="/" className="blog-category">
                                                        {blog.language}
                                                    </a>
                                                </div>
                                                <div className="blog-test">
                                                    <h2>{blog.blogTextH3}</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Iste porro ad aut at fuga assumenda consequatur qui aperiam
                                                        laboriosam voluptates?
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Quaerat odio non accusantium inventore expedita laboriosam
                                                        perferendis officia iusto possimus maiores voluptatibus
                                                        libero neque voluptas distinctio eligendi quis, ex ullam
                                                        reiciendis, aliquid sequi. Nisi hic mollitia incidunt. Totam
                                                        minima placeat repudiandae, reprehenderit consequatur
                                                        voluptatem, quia dolorem ut magnam autem consectetur harum
                                                        omnis, sunt explicabo architecto commodi iusto nam fuga.
                                                        Fugiat ut soluta nobis deleniti fuga deserunt eaque porro
                                                        corporis impedit quisquam ipsam suscipit quasi qui, quod
                                                        nesciunt ea adipisci natus neque modi magni ad velit
                                                        corrupti. Velit harum quae commodi doloribus optio natus
                                                        culpa, quo quibusdam nobis odit labore magnam ducimus
                                                        incidunt voluptatem suscipit earum porro exercitationem.
                                                        Voluptatum reprehenderit dignissimos natus amet nisi
                                                        laudantium maiores, quibusdam aliquam velit at nihil
                                                        obcaecati beatae neque veniam officia praesentium! Ea id
                                                        aspernatur soluta itaque asperiores, magnam, ducimus
                                                        distinctio dolores fugit rem similique labore molestiae esse
                                                        dicta voluptas facilis. Modi dignissimos voluptate quas illo
                                                        quasi.
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Delectus eligendi sed ducimus, hic reprehenderit culpa
                                                        veritatis cupiditate nisi dolore commodi quisquam vitae,
                                                        illum cumque, voluptatibus incidunt! Doloribus at, eos quos
                                                        eveniet a excepturi id quasi eum. Accusamus fuga non cum!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-details-contact-form">
                                                <h2>Comments</h2>
                                                <Comments />
                                            </div>
                                        </Col>

                                        <SideBar
                                            RecentPosts={recentPosts}
                                            blogCategoryList={BlogCategoryList}
                                            ArchiveBlogs={archiveBlogs}
                                        />

                                    </Row>

                                    <Row>
                                        <Col xl={12}>
                                            <div className="blog-recomended">
                                                <h2>Recomended Post</h2>
                                                <Row>
                                                    {recomendedData.map(
                                                        data =>
                                                        (
                                                            <Recomended
                                                                key={data.id}
                                                                blogImg={data.blogImg}
                                                                authorImg={data.authorImg}
                                                                authorName={data.authorName}
                                                                category={data.category}
                                                                title={data.title}
                                                                desc={data.desc}
                                                            />
                                                        )
                                                    )}
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>

                                </Container>
                            </section>
                        </main>

                        <Footer />
                    </>
                )
            }
        </Fragment>
    );
};

export default Blog;