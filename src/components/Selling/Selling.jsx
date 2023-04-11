import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
    FaStar
} from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/navigation";
import { Grid, Navigation } from 'swiper';
import './style.scss'

export default function Selling() {
    return (
        <div className='selling'>
            <Container>
                <div className='section__simple'>
                    <div className='section__header'>
                        <div className='section__header__title'>BÁN CHẠY</div>
                    </div>
                    <div className='section__content'>
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
                            modules={[Grid, Navigation]}
                            className='selling__swiper'
                        >
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=1" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=2" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=3" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=4" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=1" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=2" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=3" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='product__item'>
                                    <div className='product__image'>
                                        <img src="https://picsum.photos/600/600?random=4" alt='12'/>
                                    </div>
                                    <div className='product_content'>
                                        <h4 className='product__name'>RU4S-D24</h4>
                                        <div className='product__price'>27.290.000₫</div>
                                        <div className='product__rate'><b>4.6</b><FaStar/></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}
