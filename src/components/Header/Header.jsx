import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    FaSearch,
    FaMapMarkerAlt,
    FaEnvelope,
    FaRegBell,
    FaRegQuestionCircle,
    FaUserCircle,
    FaUserEdit,
    FaBars,
    FaHome,
    FaUser,
    FaAddressCard,
    FaAward,
    FaArrowLeft,
    FaAngleDoubleRight,
    FaAngleDoubleLeft,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { removeAccents } from '../../util/func';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [productGroupId, setProductGroupId] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleCloseMbGroup = () => setShowMobileMenu(false);
    const handleShowMbGroup = () => setShowMobileMenu(true);

    const [showMbMenuProducer, setshowMbMenuProducer] = useState(false);
    const handleCloseMbMenuProducer = () => setshowMbMenuProducer(false);
    const handleShowMbMenuProducer = () => setshowMbMenuProducer(true);

    const handleCloseMobileMenu = () => {
        setshowMbMenuProducer(false);
        setShowMobileMenu(false);
    }

    const data = [
        {
            "productGroupId": 1,
            "productGroupName": "Relay",
            "producerMenu": [
                {
                    "producerId": 1,
                    "producerName": "Siemens",
                    "producerDetail": "...",
                    "producerImage": "http://localhost:4000/static/producer/1680096305983-76044496-do khoang cach rf.jpg"
                },
                {
                    "producerId": 2,
                    "producerName": "Snider",
                    "producerDetail": "abc",
                    "producerImage": null
                }
            ]
        },
        {
            "productGroupId": 2,
            "productGroupName": "Cầu dao",
            "producerMenu": [
                {
                    "producerId": 1,
                    "producerName": "Siemens",
                    "producerDetail": "...",
                    "producerImage": "http://localhost:4000/static/producer/1680096305983-76044496-do khoang cach rf.jpg"
                },
                {
                    "producerId": 2,
                    "producerName": "Orom",
                    "producerDetail": "abc",
                    "producerImage": null
                }
            ]
        }

    ]

    const dataMainMenu = [
        {
            "mainMenuId": 1,
            "mainMenuName": "Trang chủ",
            "mainMenuUrl": "/home",
        },
        {
            "mainMenuId": 2,
            "mainMenuName": "SẢN PHẨM",
            "mainMenuUrl": "/product-group",
        },
        {
            "mainMenuId": 3,
            "mainMenuName": "DỊCH VỤ",
            "mainMenuUrl": "/service",
        },
        {
            "mainMenuId": 4,
            "mainMenuName": "TÀI LIỆU",
            "mainMenuUrl": "/document",
        },
        {
            "mainMenuId": 5,
            "mainMenuName": "GIỚI THIỆU",
            "mainMenuUrl": "/about",
        },
    ]

    const [showRightBar, setShowRightBar] = useState(false);
    const toggleShowRightBar = () => setShowRightBar((showRightBar) => !showRightBar);

    const [scrollHeader, setScrollHeader] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            setScrollHeader(true);
        }
        else {
            setScrollHeader(false);
        }
    });

    const renderProductMenu = () => {
        return data.map((el) => {
            return <div key={`group-menu${el.productGroupId}`} className='menu__item'>
                <div className='title__list'>
                    <NavLink to={`/product-group/${removeAccents(el.productGroupName)}`}>{el.productGroupName}</NavLink>
                    <IoIosArrowForward />
                </div>
                <Nav className='one__list' navbarScroll>
                    {
                        el.producerMenu.map((el) => {
                            return <div key={`producer-menu${el.producerId}`} className='one__list__item'>
                                <NavLink to={`/producer/${removeAccents(el.producerName)}`}>{el.producerName}</NavLink>
                            </div>
                        })
                    }
                </Nav>
            </div>
        });
    };

    const renderMainMenu = () => {
        return dataMainMenu.map((el) => {
            return <NavLink key={`main-menu${el.mainMenuId}`} to={removeAccents(el.mainMenuUrl)}>{el.mainMenuName}</NavLink>
        })
    };

    const renderGroupMenuMobile = () => {
        return data.map((el, index) => {
            return <div key={`group-menu-mobile${el.productGroupId}`} className='menu__item'
                onClick={() => {
                    setProductGroupId(index);
                    handleShowMbMenuProducer();
                }}>
                <NavLink to="#" >{el.productGroupName}</NavLink>
                <IoIosArrowForward />
            </div>
        });
    };

    const renderProducerMenuMobile = () => {
        return data[productGroupId].producerMenu.map((el) => {
            return <div key={`producer-menu-mobile${el.producerId}`} className='menu__item'>
                <NavLink to={`/producer/${removeAccents(el.producerName)}`} onClick={handleCloseMobileMenu}>{el.producerName}</NavLink>
            </div>
        })
    };

    return (
        <header>
            <div className={scrollHeader ? 'header__wrap nav__fixed' : 'header__wrap'}>
                <Container fluid="xl" className='header__top py-0'>
                    <Navbar className='navbar__top py-0' variant="dark" expand="md">
                        <Navbar.Collapse className="navbar__top__content justify-content-between">
                            <Nav className='navbar__top__left'>
                                <Link className='vertical' to="#"><FaMapMarkerAlt /> Bình Dương</Link>
                                <Link className='vertical' to="#"><FaEnvelope /> Linh@gmail.com</Link>
                                <Link className='vertical hotline' to="#">Hotline: 0935</Link>
                            </Nav>
                            <Nav className='navbar__top__right'>
                                <Link to="#"><FaRegBell /> Thông báo</Link>
                                <Link to="#"><FaRegQuestionCircle /> Hỗ trợ</Link>
                                <Link to="#"><FaUserCircle /> Đăng nhập</Link>
                                <Link className='vertical' to="#"><FaUserEdit /> Đăng ký</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <Container fluid="xl" className='header__main'>
                    <Navbar className='navbar__main' variant="dark" expand="md" >
                        <div className='navbar__search'>
                            <Link to="/" className='navbar__brand d-none d-md-inline '>ANT ELECTRIC</Link>
                            <div className='my-2 my-md-0 d-flex justify-content-around w-100'>
                                <Button className='button__menu d-md-none' onClick={handleShowMbGroup}>
                                    <FaBars />
                                </Button>
                                <div className='search__wrap'>
                                    <Form.Control className='input__search'
                                        type="text"
                                        placeholder="Tìm kiếm theo tên sản phẩm"
                                        aria-label="Search"
                                    />
                                    <div className="button__search__wrapper">
                                        <Button className='button__search'><FaSearch /></Button>
                                    </div>
                                </div>
                                <Button className='button__cart'><CgShoppingCart /></Button>
                            </div>
                        </div>
                        <div className='navbar__menu d-none d-md-flex'>
                            <div className='menu__product'>
                                <div className='menu__product__title'>
                                    <FaBars />
                                    <span>DANH MỤC</span>
                                </div>
                                <Nav className='menu__product__content' navbarScroll>
                                    {renderProductMenu()}
                                </Nav>
                            </div>
                            <div className='menu__home d-flex'>
                                {renderMainMenu()}
                            </div>
                        </div>
                    </Navbar>
                </Container>
            </div>

            <div className='header__bottom d-block d-md-none fixed-bottom'>
                <div className='navbar__bottom'>
                    <Nav className='link__wrapper d-flex justify-content-around w-100'>
                        <NavLink to="/">
                            <FaHome />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/about">
                            <FaAddressCard />
                            <span>Liên hệ</span>
                        </NavLink>
                        <NavLink to="/hotsale">
                            <FaAward />
                            <span>Bán chạy</span>
                        </NavLink>
                        <NavLink to="/notify">
                            <FaRegBell />
                            <span>Thông báo</span>
                        </NavLink>
                        <NavLink to="/profile">
                            <FaUser />
                            <span>Tôi</span>
                        </NavLink>
                    </Nav>
                </div>
            </div>

            <div className='pull__right__bar' onClick={toggleShowRightBar}>
                <span className='toggle-right-sidebar'> {showRightBar ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}</span>
            </div>
            <div className={showRightBar ? 'right__sidebar hide_right_bar' : 'right__sidebar'}>
                <div className='right__sidebar__content'>
                    <div className='right__sidebar__wrap'>
                        <div className='right__sidebar__item'>
                            <span className='right__sidebar__icon zalo'><SiZalo /></span>
                        </div>
                        <div className='right__sidebar__item'>
                            <span className='right__sidebar__icon facebook'><RiFacebookFill /></span>
                        </div>
                    </div>
                </div>
            </div>

            <Offcanvas className='mobile__menu'
                show={showMobileMenu}
                onHide={handleCloseMbGroup}
                scroll={true}
            >
                <Offcanvas.Header>
                    <FaArrowLeft onClick={handleCloseMbGroup} />
                    <Offcanvas.Title>Danh mục</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='menu__product'>
                    <div className='menu__product__content'>
                        {renderGroupMenuMobile()}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas className='mobile__menu'
                show={showMbMenuProducer}
                onHide={handleCloseMbMenuProducer}
                scroll={true}
            >
                <Offcanvas.Header>
                    <FaArrowLeft onClick={handleCloseMbMenuProducer} />
                    <Offcanvas.Title>
                        {data[productGroupId].productGroupName}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='menu__product'>
                    <div className='menu__product__content'>
                        {renderProducerMenuMobile()}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}
