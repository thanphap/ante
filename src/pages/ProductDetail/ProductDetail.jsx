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

export default function ProductDetail() {
    const [height, setHeight] = useState('80px');
    const [showSlide, setShowSlide] = useState(0);
    const getHeight = useRef(null);
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
    const data = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        'https://swiperjs.com/demos/images/nature-4.jpg',
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg"
    ];

    useEffect(() => {
        function handleResize() {
            const setHeightSwiperWrapper = document.querySelectorAll('.image__swiper>.swiper-wrapper');
            if (window.outerWidth > 479 && window.outerWidth < 768) {
                setHeight(`${getHeight.current.clientHeight}px`)
                // console.log(window.outerWidth);
            }
            else {
                setHeight('auto');
                setHeightSwiperWrapper[0].style.height = 'auto';
            }
        }
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
    })


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
                                <Nav className='related__category' activeKey="ATV12">
                                    <Nav.Link className='hadchild' eventKey="ATV12"><IoMdArrowDropright /><span>ATV12H018F1</span> </Nav.Link>
                                    <Nav.Link className='hadchild' eventKey="ATV212"><IoMdArrowDropright /><span>ATV12H018M3</span></Nav.Link>
                                    <Nav.Link className='hadchild' eventKey="ATV312"><IoMdArrowDropright /><span>ATV12H037F1</span></Nav.Link>
                                    <Nav.Link className='hadchild' eventKey="ATV32"><IoMdArrowDropright /><span>ATV12H037M2</span></Nav.Link>
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
                                    <img ref={getHeight} src={data[showSlide]} alt="123" />
                                </div>
                                <div className='thumbs__image'>
                                    <Swiper
                                        // ref={swiperRef}
                                        style={{ height: height }}
                                        onClick={(swiper) => {
                                            setShowSlide(swiper.clickedIndex);
                                        }}
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
                                        modules={[Grid, Navigation]}
                                        className="image__swiper"
                                    >
                                        {data.map((item, index) => {
                                            return <SwiperSlide key={index} className={index === showSlide ? "show__slide" : ''}>
                                                <img src={item} alt='' />
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>
                            </Col>
                            <Col className='poduct__detail__sell' xs={12} md={7}>
                                <h3 className='poduct__header'>ATV12H018F1</h3>
                                <div className='poduct__review__wrapper'>
                                    <div className='review__item product__rate'>
                                        <b>4.6</b><FaStar />
                                    </div>
                                    <div className='review__item'>
                                        <span className='review__number'>4k</span>
                                        <span>Đánh Giá</span>
                                    </div>
                                    <div className='review__item'>
                                        <span className='review__number'>12k</span>
                                        <span>Đã Bán</span>
                                    </div>
                                </div>
                                <div className='product__price'>
                                    <span>27.290.000₫</span>
                                </div>
                                <div className='product__document space__top'>
                                    <div className='document__item'>
                                        <div className='left__align'>Loại sản phẩm:</div>
                                        <div><Nav.Link to='#'>ATV12</Nav.Link></div>
                                    </div>
                                    <div className='document__item'>
                                        <div className='left__align'>Mã sản phẩm:</div>
                                        <div>ATV12H018F1</div>
                                    </div>
                                    <div className='document__item'>
                                        <div className='left__align'>Tài liệu kỹ thuật:</div>
                                        <div className='download__document'>
                                            <Nav.Link to='#'><BsFiletypePdf /></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='product__quantity__wrapper space__top'>
                                    <span className='left__align'>Số lượng:</span>
                                    <div className='product__quantity__mid'>
                                        <Button><FiMinus /></Button>
                                        <Form.Control className='input__quantity' type="text" value={1} />
                                        <Button><FiPlus /></Button>
                                    </div>
                                    <span>1669 sản phẩm có sẵn</span>
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
                                <div className='tab__header'>
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
                                    <Nav className="tab__item bottom">
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
                                                <SwiperSlide >
                                                    <Nav.Link to='#detail'>
                                                        Mô tả sản phẩm
                                                    </Nav.Link>
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <Nav.Link to='#detail'>
                                                        Nguồn gốc
                                                    </Nav.Link>
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <Nav.Link to='#detail'>
                                                        Đóng gói & giao hàng
                                                    </Nav.Link>
                                                </SwiperSlide>
                                                <SwiperSlide >
                                                    <Nav.Link to='#detail'>
                                                        Câu hỏi thường gặp
                                                    </Nav.Link>
                                                </SwiperSlide>
                                            </Swiper>
                                            <div className="swiper-button-next-tab"><IoIosArrowForward /></div>
                                        </div>
                                    </Nav>
                                </div>
                                <Tab.Content className='tab__content'>
                                    <Tab.Pane eventKey="detail">
                                        <div className='conttent__warpper'>
                                            ab
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
