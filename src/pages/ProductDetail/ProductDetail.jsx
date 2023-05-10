import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import { FaStar } from "react-icons/fa";
import { BsCartPlus, BsFiletypePdf } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoMdArrowDropright, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { Grid, Navigation } from "swiper";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { removeAccents } from '../../util/func';

export default function ProductDetail() {
    const [showSlide, setShowSlide] = useState(0);
    const [keyListRelated, setKeyListRelated] = useState('');

    // const getHeight = useRef(null);
    // const swiperRef = useRef();
    // const showSlide = (swiper) => {
    //     // const swiper = swiperRef.current?.swiper;
    //     // console.log(swiper.slides.img);
    //     // console.log(swiper)
    //     // console.log(Aa)

    //     swiper.slides.map((ele) => { 
    //         if(ele === swiper.clickedSlide){
    //             // swiper.updateSlidesClasses('abc');
    //             ele.classList.add('showall');
    //         }
    //         // else ele.classList.remove('showall');
    //      });

    //     // console.log(clickedIndex+1);
    //     // swiperRef.current?.swiper.slideTo(clickedIndex);
    //     // setCurrentIndex(clickedIndex+1)
    //     // swiper.clickedSlide.classList.add('click-state');
    //     // swiperRef.current?.swiper.clickedSlide.classList.add('click-state');
    //     console.log(swiperRef.current?.swiper.slides);
    // }

    const { hash, key } = useLocation()
    useEffect(() => {
        if (hash) {
            const tabHeader = document.getElementById('tabHeaderDetail');
            const targetElement = document.getElementById(hash.substring(1));
            const y = targetElement?.getBoundingClientRect().top + window.pageYOffset - tabHeader?.getBoundingClientRect().height - (window.outerWidth < 768 ? 46.5 : 0);
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [key, hash]);

    const handleResize = () => {
        let valueHeightSwiper = 'auto';
        const setHeightSwiperWrapper = document.querySelectorAll('.image__swiper>.swiper-wrapper');
        const getHeightLargeImage = document.getElementById('largeImage');
        const setHeightSwiper = document.getElementById('imageSwiper');
        if (window.outerWidth > 479 && window.outerWidth < 768) {
            valueHeightSwiper = `${getHeightLargeImage.getBoundingClientRect().height}px`
        }
        else {
            valueHeightSwiper = 'auto'
            setHeightSwiperWrapper[0].style.height = 'auto';
        }
        setHeightSwiper.style.height = valueHeightSwiper;
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    });

    const dataListProdut = [
        {
            "productId": 1,
            "productName": "ATV12H018F1",
            "amount": 100,
            "price": 20,
            "productImage": "",
            "description": "234dfds",
            "location": "d1",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1,
            "createdProduct": "2023-05-05T13:05:14.000Z"
        },
        {
            "productId": 2,
            "productName": "ATV12H018M2",
            "amount": 100,
            "price": 21,
            "productImage": "",
            "description": "234dfds",
            "location": "d1",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1,
            "createdProduct": "2023-05-05T13:06:11.000Z"
        },
        {
            "productId": 3,
            "productName": "ATV12H018M3",
            "amount": 100,
            "price": 22,
            "productImage": "",
            "description": "234dfds",
            "location": "d1",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1,
            "createdProduct": "2023-05-05T13:06:28.000Z"
        },
        {
            "productId": 4,
            "productName": "ATV12H037F1",
            "amount": 100,
            "price": 18,
            "productImage": "",
            "description": "234dfds",
            "location": "d1",
            "assess": 20,
            "voted": 4,
            "userId": 1,
            "productTypeId": 1,
            "createdProduct": "2023-05-05T13:06:55.000Z"
        }
    ]

    const dataProduct = {
        "productId": 1,
        "productName": "ATV12H018F1",
        "amount": 100,
        "price": 20,
        "productImage": [
            "https://swiperjs.com/demos/images/nature-1.jpg",
            "https://swiperjs.com/demos/images/nature-2.jpg",
            "https://swiperjs.com/demos/images/nature-3.jpg",
            'https://swiperjs.com/demos/images/nature-4.jpg',
            "https://swiperjs.com/demos/images/nature-5.jpg",
            "https://swiperjs.com/demos/images/nature-6.jpg"
        ],
        "description": [
            {
                "partId": "describe",
                "partTitle": "Mô tả sản phẩm",
                "partContent": "asds ",
            },
            {
                "partId": "origin",
                "partTitle": "Nguồn gốc",
                "partContent": "234dfds",
            },
            {
                "partId": "park",
                "partTitle": "Đóng gói và giao hàng",
                "partContent": "234dfdsssdsssadadasdasdadsds ssdadasdasd   ssdasd asdasdad  adsds adsad asds 234dfdsssdsssadadasdasdadsds ssdadasdasd   ssdasd asdasdad  adsds adsad asds ",
            },
            {
                "partId": "question",
                "partTitle": "Câu hỏi thường gặp",
                "partContent": "234dfds"
            }
        ],
        "location": "d1",
        "assess": 20,
        "voted": 4,
        "userId": 1,
        "productTypeId": 1,
        "createdProduct": "2023-05-05T13:05:14.000Z",
        "productType": {
            "productTypeId": 1,
            "productTypeName": "AT44",
            "productTypeDetail": "...",
            "productTypeImage": "",
            "menuId": 3,
            "createdTime": "2023-05-05T09:55:32.000Z"
        },
        "productDocuments": [
            {
                "documentId": 1,
                "name": "data123",
                "url": "...",
                "createdDocument": "2023-05-05T14:24:11.000Z",
                "productId": 1
            },
            {
                "documentId": 3,
                "name": "da12",
                "url": "...",
                "createdDocument": "2023-05-05T15:21:04.000Z",
                "productId": 1
            }
        ]
    }

    const renderMenu = (data) => {
        return data.map((el) => {
            return <NavLink className='hadchild'
                key={`related${el.productName}`}
                to={`/product-detail/${removeAccents(el.productName)}`}
                onClick={() => setKeyListRelated(el.productName)}
            >
                <IoMdArrowDropright />
                <span>{el.productName}</span>
            </NavLink>
        })
    }

    const renderThumbsImage = (data) => {
        return data.productImage.map((el, index) => {
            return <SwiperSlide key={`product-img${index}`} className={index === showSlide ? "show__slide" : ''}>
                <img src={el} alt={data.productName} />
            </SwiperSlide>
        })
    }

    const renderTabHeaderBottom = (data) => {
        return <Nav className="tab__item bottom">
            <div className='tab__bottom__content'>
                <div className="swiper-button-prev-tab"><IoIosArrowBack /></div>
                <Swiper id='topswiper'
                    slidesPerView={"auto"}
                    spaceBetween={21}
                    modules={[Navigation]}
                    navigation={{
                        navigation: true,
                        nextEl: '.swiper-button-next-tab',
                        prevEl: '.swiper-button-prev-tab',
                    }}
                    className='tab__swiper'
                >
                    {data.description.map((el) => {
                        return <SwiperSlide key={`part-link${el.partId}`}>
                            <Link to={`#${el.partId}`}>
                                {el.partTitle}
                            </Link>
                        </SwiperSlide>
                    })}
                </Swiper>
                <div className="swiper-button-next-tab"><IoIosArrowForward /></div>
            </div>
        </Nav>
    }

    const renderTabContent = (data) => {
        return <div className='conttent__warpper'>
            {data.description.map((el) => {
                return <div id={el.partId} key={`part-content${el.partId}`} className='part__content'>
                    <h4 >{el.partTitle}</h4>
                    <div>{el.partContent}</div>
                </div>
            })}
        </div>
    }

    return (
        <div className='product__detail product__style'>
            <Container fluid='xl'>
                <Row className='product__style__content'>
                    <Col className='filter__panel d-none d-lg-block' lg={3} xl={2}>
                        <div className='section__simple'>
                            <div className='section__header'>
                                <div className='section__header__title'>GỢI Ý CHO BẠN</div>
                            </div>
                            <div className='section__content'>
                                <Nav className='related__category' activeKey={keyListRelated}>
                                    {renderMenu(dataListProdut)}
                                </Nav>
                            </div>
                        </div>
                        <div className='section__simple'>
                            <div className='section__header'>
                                <div className='section__header__title'>BỘ LỌC TÌM KIẾM</div>
                            </div>
                            <div className='section__content'>
                            </div>
                        </div>
                    </Col>
                    <Col className='result__wrapper' xs={12} lg={9} xl={10}>
                        <Row className='poduct__detail__top'>
                            <Col className='poduct__detail__image' xs={12} md={5}>
                                <div className='large__image'>
                                    <img id='largeImage' src={dataProduct.productImage[showSlide]} alt={dataProduct.productName} />
                                </div>
                                <div className='thumbs__image'>
                                    <Swiper
                                        id='imageSwiper'
                                        // ref={swiperRef}
                                        // style={{ height: height }}
                                        onClick={(swiper) => {
                                            setShowSlide(swiper.clickedIndex);
                                        }}
                                        modules={[Grid, Navigation]}
                                        direction={"horizontal"}
                                        grid={{
                                            fill: 'column',
                                            rows: 1
                                        }}
                                        slidesPerView={4}
                                        spaceBetween={10}
                                        breakpoints={{
                                            480: {
                                                direction: "vertical",
                                                grid: {
                                                    fill: 'row',
                                                    rows: 1
                                                },
                                                slidesPerView: 4,
                                            },
                                            576: {
                                                direction: "vertical",
                                                grid: {
                                                    fill: 'row',
                                                    rows: 2
                                                },
                                                slidesPerView: 4
                                            },
                                            768: {
                                                direction: "horizontal",
                                                grid: {
                                                    fill: 'column',
                                                    rows: 1
                                                },
                                                slidesPerView: 3,
                                            },
                                            800: {
                                                direction: "horizontal",
                                                slidesPerView: 3,
                                            },
                                            992: {
                                                direction: "horizontal",
                                                slidesPerView: 3,
                                            },
                                            1200: {
                                                direction: "horizontal",
                                                slidesPerView: 4,
                                            },
                                        }}
                                        navigation={true}
                                        className="image__swiper"
                                    >
                                        {renderThumbsImage(dataProduct)}
                                    </Swiper>
                                </div>
                            </Col>
                            <Col className='poduct__detail__sell' xs={12} md={7}>
                                <h3 className='poduct__header'>{dataProduct.productName}</h3>
                                <div className='poduct__review__wrapper'>
                                    <div className='review__item product__rate'>
                                        <b>{dataProduct.voted}</b><FaStar />
                                    </div>
                                    <div className='review__item'>
                                        <span className='review__number'>{dataProduct.assess}</span>
                                        <span>Đánh Giá</span>
                                    </div>
                                    <div className='review__item'>
                                        <span className='review__number'>12k</span>
                                        <span>Đã Bán</span>
                                    </div>
                                </div>
                                <div className='product__price'>
                                    <span>{dataProduct.price}₫</span>
                                </div>
                                <div className='product__document space__top'>
                                    <div className='document__item'>
                                        <div className='left__align'>Loại sản phẩm:</div>
                                        <div><Link to={`/product-type/${removeAccents(dataProduct.productType.productTypeName)}`}>{dataProduct.productType.productTypeName}</Link></div>
                                    </div>
                                    <div className='document__item'>
                                        <div className='left__align'>Mã sản phẩm:</div>
                                        <div>{dataProduct.productName}</div>
                                    </div>
                                    <div className='document__item'>
                                        <div className='left__align'>Tài liệu kỹ thuật:</div>
                                        <div className='download__document'>
                                            <Link to={`/download/${removeAccents(dataProduct.productDocuments[0].name)}`}><BsFiletypePdf /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='product__quantity__wrapper space__top'>
                                    <span className='left__align'>Số lượng:</span>
                                    <div className='product__quantity__mid'>
                                        <Button><FiMinus /></Button>
                                        <Form.Control className='input__quantity' type="text" defaultValue={1} />
                                        <Button><FiPlus /></Button>
                                    </div>
                                    <span className='me-1'>{dataProduct.amount}</span><span> sản phẩm có sẵn</span>
                                </div>
                                <div className='product__buy__wrapper space__top'>
                                    <Button className='button__cart'><BsCartPlus /><span>Thêm vào giỏ hàng</span></Button>
                                    <Button className='button__buy'>Mua ngay</Button>
                                </div>
                                <div className='promotion__wrapper space__top'>
                                    <div className='left__align'>Khuyến mại:</div>
                                    <div className='promotion'>
                                        <div>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nostrum eum molestias nihil vel laborum, deserunt placeat amet a quam fugit dolor tenetur est officia voluptate accusantium dolorum sit beatae!
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="product__detail__bottom">
                            <Tab.Container defaultActiveKey="detail">
                                <div id='tabHeaderDetail' className='tab__header'>
                                    <Nav className="tab__item top">
                                        <Nav.Item>
                                            <Nav.Link eventKey="detail">Thông tin chi tiết</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="info">Hồ sơ công ty</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="review">Đánh giá sản phẩm</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    {renderTabHeaderBottom(dataProduct)}
                                </div>
                                <Tab.Content className='tab__content'>
                                    <Tab.Pane eventKey="detail">
                                        <div className='conttent__warpper'>
                                            {renderTabContent(dataProduct)}
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="info">
                                        <div className='conttent__warpper'>
                                            cd
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="review">
                                        <div className='conttent__warpper'>
                                            cde
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        <div className='require'>
                            <div className='section__simple'>
                                <div className='section__header'>
                                    <div className='section__header__title'>Gửi tin nhắn cho ANTE</div>
                                </div>
                                <div className='section__content'>
                                    <span className='receiver'>Đến: ANTE</span>
                                    <Form.Control className='message'
                                        as="textarea"
                                        placeholder="Nhập chi tiết yêu cầu của bạn về sản phẩm"
                                        rows={4}
                                    />
                                    <Row className='info'>
                                        <Col xs={12} md={6}>
                                            <Form.Control type="text" placeholder="Họ và tên" />
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Form.Control type="number" placeholder="Số điện thoại" />
                                        </Col>
                                    </Row>
                                    <div className='button__wrapper'>
                                        <Button className='send__message'>Gửi</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
