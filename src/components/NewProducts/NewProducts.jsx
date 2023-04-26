import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import {
    FaStar
} from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';

export default function NewProducts() {
    return (
        <div className='new__products'>
            <Tab.Container defaultActiveKey="new">
                <Nav className="section__tab">
                    <Nav.Item>
                        <Nav.Link eventKey="new">SẢN PHẨM MỚI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="old">ĐỒ CỦ</Nav.Link>
                    </Nav.Item>
                    <div className='viewall'>
                        <Nav.Link><span>Xem tất cả</span><IoIosArrowDroprightCircle /></Nav.Link>
                    </div>
                </Nav>
                <Tab.Content className='section__content'>
                    <Tab.Pane eventKey="new">
                        <Swiper
                            slidesPerView={1}
                            slidesPerGroup={1}
                            spaceBetween={0}
                            navigation={true}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,

                                },
                                576: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                992: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                },
                                1140: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,

                                },
                            }}
                            modules={[Navigation]}
                            className='new__products__swiper'
                        >
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=130" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=131" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=132" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Tab.Pane>
                    <Tab.Pane eventKey="old">
                        <Swiper
                            slidesPerView={1}
                            slidesPerGroup={1}
                            spaceBetween={0}
                            navigation={true}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,

                                },
                                576: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                992: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                },
                                1140: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 6,

                                },
                            }}
                            modules={[Navigation]}
                            className='new__products__swiper'
                        >
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=134" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=135" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <Link to="#">
                                        <div className='product__image'>
                                            <img src="https://picsum.photos/600/600?random=136" alt='12' />
                                        </div>
                                        <div className='product_content'>
                                            <h4 className='product__name'>RU4S-D24</h4>
                                            <div className='product__price'>27.290.000₫</div>
                                            <div className='product__rate'><b>4.6</b><FaStar /></div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}