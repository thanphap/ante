import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Carousel,
    Col,
    Container,
    Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
export default function Banner() {
    return (
        <div className='banner'>
            <Container fluid="lg">
                <Row>
                    <Col className='banner__left'>
                        <Carousel variant="light" slide={false}>
                            <Carousel.Item>
                                <img src="https://picsum.photos/1536/631?random=12"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://picsum.photos/1536/631?random=16"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://picsum.photos/1536/631?random=18"
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
                    <Col className='banner__right d-none d-md-flex flex-column' xs={4}>
                        <Link className='endow' to="#">
                            <img src="https://picsum.photos/600/200?random=16" alt="" />
                        </Link>
                        <Link className='endow' to="#">
                            <img src="https://picsum.photos/600/200?random=17" alt="" />
                        </Link>
                    </Col>
                </Row>
                <div className='producer'>
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        spaceBetween={10}
                        navigation={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },
                            576: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                            },
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                            },
                            992: {
                                slidesPerView: 7,
                                slidesPerGroup: 7,
                            },
                            1140: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                            },
                        }}
                        modules={[Navigation]}
                        className='producer__swiper'
                    >
                        <SwiperSlide>
                            <Link to="/producer">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="#">
                                <div className='producer_item'>
                                    <img src="https://hoplongtech.com/uploads/category/Fecon.jpg" alt="" />
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
