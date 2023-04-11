import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import "swiper/css/navigation";
import { Grid, Navigation } from 'swiper';
import './style.scss'

export default function Category() {
    return (
        <div className='category'>
            <Container>
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
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=1" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=2" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=3" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=4" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=5" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=6" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=1" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=2" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=3" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=4" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=5" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=6" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=1" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=2" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=3" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=4" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=5" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=6" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=1" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=2" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=3" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=4" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=5" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="#" className="category__item">
                                    <div className="category__image">
                                        <img src="https://picsum.photos/800/800?random=6" alt="12" />
                                    </div>
                                    <div className="category__title">
                                        <span>siemmens</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}
