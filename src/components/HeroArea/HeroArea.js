import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Container, Row } from 'react-bootstrap';
import HeroAreaList from './HeroAreaList/HeroAreaList';
import './HeroArea.css';

const HeroArea = (props) => {
    return (
        <section className="hero-area feature-post">
            <Container>
                <Row>
                    <Col xl={12}>
                        <OwlCarousel
                            items={1}
                            className="owl-theme feature-post-slider"
                            loop
                            dots={false}
                        >
                            {props.HeroData.map(data => (
                                <HeroAreaList
                                    key={data.id}
                                    hero={data.hero}
                                    title={data.title}
                                    desc={data.desc}
                                />
                            ))}
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroArea;