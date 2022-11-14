/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import Header from "../../components/Header/Header";
import HeroArea from "../../components/HeroArea/HeroArea";
import MainArea from "../../components/MainArea/MainArea";
import Footer from "../../components/Footer/Footer";
import { BlogData, RecentPosts, blogCategoryList, ArchiveBlogs, RecomendedData, HeroData } from '../../data/BlogData';

const Home = () => {
    const [blogData, setBlogData] = useState(BlogData);
    const [recentPosts, setRecentPosts] = useState(RecentPosts);
    const [BlogCategoryList, setBlogCategoryList] = useState(blogCategoryList);
    const [archiveBlogs, setArchiveBlogs] = useState(ArchiveBlogs);
    const [recomendedData, setRecomendedData] = useState(RecomendedData);
    const [heroData, setHeroData] = useState(HeroData);

    return (
        <Fragment>

            {/* Header */}
            <Header />

            {/* Hero Area */}
            <HeroArea
                HeroData={heroData}
            />

            {/* Main Area */}
            <MainArea
                BlogData={blogData}
                RecentPosts={recentPosts}
                blogCategoryList={BlogCategoryList}
                ArchiveBlogs={archiveBlogs}
                RecomendedData={recomendedData}
            />

            {/* Footer */}
            <Footer />

        </Fragment>
    );
};

export default Home;