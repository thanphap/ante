import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Carousel,
    Col,
    Container,
    Row
} from 'react-bootstrap';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { removeAccents } from '../../util/func';

export default function Banner() {
    const dataBanner = [
        {
            "bannerId": 1,
            "bannerImage": "https://picsum.photos/1536/631?random=12",
            "bannerTitle": "First slide label",
            "bannerContent": "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            "bannerId": 2,
            "bannerImage": "https://picsum.photos/1536/631?random=13",
            "bannerTitle": "Second slide label",
            "bannerContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "bannerId": 3,
            "bannerImage": "https://picsum.photos/1536/631?random=14",
            "bannerTitle": "Third slide label",
            "bannerContent": "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },

    ];

    const dataAdvertise = [
        {
            "cardId": 1,
            "cardImage": "https://picsum.photos/1536/631?random=15",
            "cardUrl": "https://picsum.photos/",
            "cardAlt": "First slide label",
        },
        {
            "cardId": 2,
            "cardImage": "https://picsum.photos/1536/631?random=16",
            "cardUrl": "https://picsum.photos/",
            "cardAlt": "First slide label",
        },
    ];

    const dataProducer = [
        {
            "producerId": 2,
            "producerName": "Snider",
            "producerImage": "https://hoplongtech.com/uploads/category/Fecon.jpg",
        },
        {
            "producerId": 3,
            "producerName": "Onrom",
            "producerImage": "http://localhost:4000/static/productgroup/1680097267217-100718436-do khoang cach rf.jpg",
        },
    ];

    const renderBanner = () => {
        return dataBanner.map((el) => {
            return <Carousel.Item key={`banner${el.bannerId}`}>
                <img src={el.bannerImage}
                    alt={el.bannerTitle}
                />
                <Carousel.Caption>
                    <h3>{el.bannerTitle}</h3>
                    <p>{el.bannerContent}</p>
                </Carousel.Caption>
            </Carousel.Item>
        });
    };

    const renderAdvertise = () => {
        return dataAdvertise.map((el) => {
            return <Link key={`card${el.cardId}`} className='endow' to={el.cardUrl}>
                <img src={el.cardImage} alt={el.cardAlt} />
            </Link>
        })
    };

    const renderProducer = () => {
        return dataProducer.map((el) => {
            return <SwiperSlide key={`producer-list${el.producerId}`}>
                <Link to={`/producer/${removeAccents(el.producerName)}`}>
                    <div className='producer__item'>
                        <img src={el.producerImage} alt={el.producerName} />
                    </div>
                </Link>
            </SwiperSlide>
        })
    }

    return (
        <div className='banner'>
            <Container fluid="lg">
                <Row>
                    <Col className='banner__left'>
                        <Carousel variant="light" slide={false}>
                            {renderBanner()}
                        </Carousel>
                    </Col>
                    <Col className='banner__right d-none d-md-flex flex-column' xs={4}>
                        {renderAdvertise()}
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
                        {renderProducer()}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
