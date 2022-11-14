import React from "react";
import './MainArea.css';
import { Col, Container, Row } from "react-bootstrap";
import SinglePostCard from "./BlogItems/SinglePostCard";
import SideBar from "./SideBar/SideBar";
import Recomended from "./Recomended/Recomended";

const MainArea = (props) => {
    return (
        <main>
            <section className="blog-list-sidebar-area">
                <Container>

                    <Row>

                        <Col xl={8}>
                            <div className="blog-list-wrapper">
                                <Row>
                                    {props.BlogData.map(data => (
                                        <SinglePostCard
                                            key={data.id}
                                            id={data.id}
                                            coverImg={data.coverImg}
                                            authorImg={data.authorImg}
                                            authorName={data.authorName}
                                            language={data.language}
                                            blogTextH3={data.blogTextH3}
                                            blogTextP={data.blogTextP}
                                        />
                                    ))}
                                </Row>
                            </div>
                        </Col>

                        <SideBar
                            RecentPosts={props.RecentPosts}
                            blogCategoryList={props.blogCategoryList}
                            ArchiveBlogs={props.ArchiveBlogs}
                        />


                    </Row>

                    <Row>
                        <Col xl={12}>
                            <div className="blog-recomended">
                                <h2>Recomended Post</h2>
                                <Row>
                                    {props.RecomendedData.map(
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
    );
};

export default MainArea;