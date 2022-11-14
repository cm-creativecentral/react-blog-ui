import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row className="align-items-center">
                    <Col xl={6} md={6}>
                        <div className="copyright-text">
                            <p>All Rights Reserved &copy; Creative Central 2022</p>
                        </div>
                    </Col>
                    <Col xl={6} md={6}>
                        <div className="footer-social">
                            <ul>
                                <li>
                                    <a href="index.html">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="index.html">
                                        <Icon.Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;