import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { FaStar } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { removeAccents } from '../../util/func';

export default function Selling() {
    const dataSelling = [
        {
            "productId": 1,
            "productName": "PLC",
            "amount": 1,
            "price": 20,
            "productImage": "http://localhost:4000/static/product/1680088476348-489767149-chan usb.png",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        },
        {
            "productId": 3,
            "productName": "Connect",
            "amount": 1,
            "price": 20,
            "productImage": "https://picsum.photos/600/600?random=130",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        },
        {
            "productId": 4,
            "productName": "VDK",
            "amount": 1,
            "price": 20,
            "productImage": "",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        }
    ];

    const dataCheapest = [
        {
            "productId": 1,
            "productName": "PLC",
            "amount": 1,
            "price": 20,
            "productImage": "http://localhost:4000/static/product/1680088476348-489767149-chan usb.png",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        },
        {
            "productId": 3,
            "productName": "Connect",
            "amount": 1,
            "price": 20,
            "productImage": "",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        },
        {
            "productId": 4,
            "productName": "VDK",
            "amount": 1,
            "price": 20,
            "productImage": "",
            "description": "234dfds",
            "location": "d",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1
        }
    ];

    const renderProduct = (data) => {
        return data?.map((el) => {
            return <SwiperSlide key={`product${el.productName}`}>
                <div className='product__item'>
                    <Link to={`/product-detail/${removeAccents(el.productName)}`}>
                        <div className='product__image'>
                            <img src={el.productImage} alt={el.productName} loading="lazy" />
                            <div className="swiper-lazy-preloader"></div>
                        </div>
                        <div className='product__content'>
                            <h4 className='product__name'>{el.productName}</h4>
                            <div className='product__price'>{el.price}</div>
                            <div className='product__rate'><b>{el.voted}</b><FaStar /></div>
                        </div>
                    </Link>
                </div>
            </SwiperSlide>
        });
    }

    return (
        <div className='selling'>
            <Tab.Container defaultActiveKey="selling">
                <Nav className="section__tab">
                    <Nav.Item>
                        <Nav.Link eventKey="selling">BÁN CHẠY</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="cheapest">GIÁ TỐT</Nav.Link>
                    </Nav.Item>
                    <div className='viewall'>
                        <Nav.Link><span>Xem tất cả</span><IoIosArrowDroprightCircle /></Nav.Link>
                    </div>
                </Nav>
                <Tab.Content className='section__content'>
                    <Tab.Pane eventKey="selling">
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
                            className='selling__swiper'
                        >
                            {renderProduct(dataSelling)}
                        </Swiper>
                    </Tab.Pane>
                    <Tab.Pane eventKey="cheapest">
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
                            className='selling__swiper'
                        >
                            {renderProduct(dataCheapest)}
                        </Swiper>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}
