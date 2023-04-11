import React from 'react'
import './style.scss'
import {
    Carousel,
    Col,
    Container,
    Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <div className='banner'>
            <Container >
                <Row>
                    <Col className='banner__left'>
                        <Carousel variant="dark" slide={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1536/631?random=12"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1536/631?random=13"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/1536/631?random=14"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='banner__right d-flex flex-column' xs={4}>
                        <Link className='endow' to="#">
                            <img src="https://picsum.photos/600/200?random=16" alt="" />
                        </Link>
                        <Link className='endow' to="#">
                            <img src="https://picsum.photos/600/200?random=17" alt="" />
                        </Link>
                    </Col>
                </Row>
                <div className='producer d-flex justify-content-around'>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Siemens_ag_logo.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Siemens_ag_logo.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Siemens_ag_logo.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className='producer_item'>
                            <img src="https://hoplongtech.com/uploads/category/Siemens_ag_logo.jpg" alt="" />
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
