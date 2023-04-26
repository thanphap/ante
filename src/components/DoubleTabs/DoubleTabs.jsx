import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Nav } from 'react-bootstrap'
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function DoubleTabs() {
    // const container = document.querySelectorAll("#topswiper>.swiper-wrapper>.swiper-slide");
    // const swiperRef = useRef();
    return (
        <div className='double__tabs'>
            <Nav className="double__tabs__wrapper top">
                <div className='double__tabs__title'>BIẾN TẦN</div>
                <div className='double__tabs__content'>
                    <div className="swiper-button-prev-top"><IoIosArrowBack /></div>
                    <Swiper id='topswiper'
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        spaceBetween={10}
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
                        navigation={{
                            navigation: true,
                            nextEl: '.swiper-button-next-top',
                            prevEl: '.swiper-button-prev-top',
                        }}
                        className='top__swiper'
                    >
                        <SwiperSlide >
                            <Nav.Link eventKey="pop9">
                                Siemens
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop1">
                                Schneider
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop2">
                                Omron
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop3">
                                Schneider
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop4">
                                Siemens
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop5">
                                Schneider
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop6">
                                Siemens
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Nav.Link eventKey="pop7">
                                Schneider
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Nav.Link eventKey="pop8">
                                Schneider
                            </Nav.Link>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-next-top"><IoIosArrowForward /></div>
                </div>
            </Nav>
            <Nav className="double__tabs__wrapper bottom">
                <div className='double__tabs__content'>
                    <div className="swiper-button-prev-bottom"><IoIosArrowBack /></div>
                    <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        spaceBetween={10}
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
                        navigation={{
                            navigation: true,
                            nextEl: '.swiper-button-next-bottom',
                            prevEl: '.swiper-button-prev-bottom',
                        }}
                        className='bottom__swiper'
                    >
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="pop">
                                Phổ biến
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="new">
                                Mới nhất
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="hot">
                                Bán chạy
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="detail">
                                Thông tin chi tiết
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Nav.Link className='select__price' eventKey="price">
                                <span>Giá</span> <IoIosArrowDown/>
                                <div className='select__price__menu'>
                                    <Nav.Link href="#action1">Giá: Thấp đến Cao</Nav.Link>
                                    <Nav.Link href="#action1">Giá: Cao đến Thấp</Nav.Link>
                                </div>
                            </Nav.Link>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-next-bottom"><IoIosArrowForward /></div>
                </div>
                <div className='double__tabs__paging'>
                    <IoIosArrowBack /><span>1/9</span><IoIosArrowForward />
                </div>
            </Nav>
        </div>
    )
}
