import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/navigation";
import { Grid, Navigation } from 'swiper';
import { removeAccents } from '../../util/func';

export default function Category() {
    const data = [
        {
            "productGroupId": 1,
            "productGroupName": "acsj",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 2,
            "productGroupName": "acfv",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        },
        {
            "productGroupId": 3,
            "productGroupName": "acsb",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 4,
            "productGroupName": "acfy",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        },
        {
            "productGroupId": 5,
            "productGroupName": "acsa",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 6,
            "productGroupName": "acfr",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        },
        {
            "productGroupId": 7,
            "productGroupName": "acsh",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 8,
            "productGroupName": "acfz",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        },
        {
            "productGroupId": 9,
            "productGroupName": "acsn",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 10,
            "productGroupName": "acfa",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        },
        {
            "productGroupId": 11,
            "productGroupName": "acsf",
            "productGroupImage": "https://picsum.photos/800/800?random=6",
            "userId": 1
        },
        {
            "productGroupId": 12,
            "productGroupName": "acfs",
            "productGroupImage": "https://picsum.photos/800/800?random=7",
            "userId": 1
        }
    ];

    const renderCategory = (data) => {
        return data.map((el) => {
            return <SwiperSlide key={`category${el.productGroupName}`}>
                <Link to={`/product-group/${removeAccents(el.productGroupName)}`} className="category__item">
                    <div className="category__image">
                        <img src={el.productGroupImage} alt={el.productGroupName} loading="lazy" />
                        <div className="swiper-lazy-preloader"></div>
                    </div>
                    <div className="category__title">
                        <span>{el.productGroupName}</span>
                    </div>
                </Link>
            </SwiperSlide>
        })
    }

    return (
        <div className='category'>
            <div className='section__simple'>
                <div className='section__header'>
                    <div className='section__header__title'>DANH MỤC</div>
                </div>
                <div className='section__content'>
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        spaceBetween={0}
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}
                        navigation={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            },
                            576: {
                                slidesPerView: 5,
                                slidesPerGroup: 5,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            },
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            },
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            },
                            1140: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                grid: {
                                    rows: 2,
                                    fill: 'row',
                                }
                            },
                        }}
                        modules={[Grid, Navigation]}
                        className='category__swiper'
                    >
                        {renderCategory(data)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
