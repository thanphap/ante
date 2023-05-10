import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Nav } from 'react-bootstrap'
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { removeAccents } from '../../util/func';

export default function DoubleTabs(props) {
    // const container = document.querySelectorAll("#topswiper>.swiper-wrapper>.swiper-slide");
    // const swiperRef = useRef();
    const dataTabs = props.dataTabs;
    const objKey = Object.keys(dataTabs)
    const [keyTabTop, setKeyTabTop] = useState('')
    const [keyTabBottom, setKeyTabBottom] = useState('pop');

    const renderLeftTab = (data) => {
        return data?.map((el) => {
            const objKeyEl = Object.keys(el);
            return <Link key={`tabTopLeft${el[objKeyEl[1]]}`} to={`${el[objKeyEl[0]]}/${removeAccents(el[objKeyEl[1]])}`}>{el[objKeyEl[1]]}</Link>
        })
    }

    const renderRightTab = (data) => {
        return data?.map((el) => {
            const objKeyEl = Object.keys(el);
            return <SwiperSlide key={`tabTop${el[objKeyEl[1]]}`}
                onClick={() => {
                    setKeyTabTop(el[objKeyEl[1]]);
                }}
            >
                <Nav.Link eventKey={el[objKeyEl[1]]}>
                    {el[objKeyEl[1]]}
                </Nav.Link>
            </SwiperSlide>
        })
    }

    return (
        <div className='double__tabs'>
            <Nav className="double__tabs__wrapper top" activeKey={keyTabTop}>
                <div className='double__tabs__title'>
                    {objKey[1] !== undefined ? renderLeftTab(dataTabs[objKey[1]]) : ''}
                </div>
                <div className='double__tabs__content'>
                    <div className="swiper-button-prev-top"><IoIosArrowBack /></div>
                    <Swiper id='topswiper'
                        slidesPerView={"auto"}
                        slidesPerGroup={3}
                        spaceBetween={30}
                        breakpoints={{
                            480: {
                                slidesPerGroup: 4,
                            },
                            576: {
                                slidesPerGroup: 5,
                            },
                            768: {
                                slidesPerGroup: 6,
                            },
                            992: {
                                slidesPerGroup: 7,
                            },
                            1140: {
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
                        {objKey[2] !== undefined ? renderRightTab(dataTabs[objKey[2]]) : ''}
                    </Swiper>
                    <div className="swiper-button-next-top"><IoIosArrowForward /></div>
                </div>
            </Nav>
            <Nav className="double__tabs__wrapper bottom" activeKey={keyTabBottom}>
                <div className='double__tabs__content'>
                    <div className="swiper-button-prev-bottom"><IoIosArrowBack /></div>
                    <Swiper
                        slidesPerView={"auto"}
                        slidesPerGroup={2}
                        spaceBetween={30}
                        breakpoints={{
                            480: {
                                slidesPerGroup: 3,
                            },
                            576: {
                                slidesPerGroup: 4,
                            },
                            768: {
                                slidesPerGroup: 5,
                            },
                            992: {
                                slidesPerGroup: 6,
                            },
                            1140: {
                                slidesPerGroup: 7,
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
                            <Nav.Link eventKey="pop" onClick={() => setKeyTabBottom('pop')}>
                                Phổ biến
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom '>
                            <Nav.Link eventKey="new" onClick={() => setKeyTabBottom('new')}>
                                Mới nhất
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="hot" onClick={() => setKeyTabBottom('hot')}>
                                Bán chạy
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Nav.Link className='select__price' eventKey="price" onClick={() => setKeyTabBottom('price')}>
                                <span>Giá</span> <IoIosArrowDown />
                                <div className='select__price__menu'>
                                    <div className='select__price__item'>Giá: Thấp đến Cao</div>
                                    <div className='select__price__item'>Giá: Cao đến Thấp</div>
                                </div>
                            </Nav.Link>
                        </SwiperSlide>
                        <SwiperSlide className='level__bottom'>
                            <Nav.Link eventKey="detail" onClick={() => setKeyTabBottom('detail')}>
                                Thông tin chi tiết
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
