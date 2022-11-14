import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header-area">

            <Container>
                <Row className="align-items-center">

                    <Col className='col-6 col-xl-6 col-md-6'>
                        <div className="logo">
                            <a href="/">!KNOWN</a>
                        </div>
                    </Col>

                    <Col className="text-end col-6 col-xl-6 col-md-6" >
                        <nav className="main-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Blog Details</a></li>
                            </ul>
                        </nav>
                    </Col>

                </Row>
            </Container>
        </header>
    );

};

export default Header; 