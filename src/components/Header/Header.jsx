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

export default function Header() {
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
            "productGroupName": "acs",
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
        }
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
    return (
        <header>
            <div className={scrollHeader ? 'header__wrap nav__fixed' : 'header__wrap'}>
                <Container fluid="xl" className='header__top py-0'>
                    <Navbar className='navbar__top py-0' variant="dark" expand="md">
                        <Navbar.Collapse className="navbar__top__content justify-content-between">
                            <Nav className='navbar__top__left'>
                                <Nav.Link className='vertical' href="#features"><FaMapMarkerAlt /> Bình Dương</Nav.Link>
                                <Nav.Link className='vertical'><FaEnvelope /> Linh@gmail.com</Nav.Link>
                                <Nav.Link className='vertical hotline'>Hotline: 0935</Nav.Link>
                            </Nav>
                            <Nav className='navbar__top__right'>
                                <Nav.Link href="#deets"><FaRegBell /> Thông báo</Nav.Link>
                                <Nav.Link href="#deets"><FaRegQuestionCircle /> Hỗ trợ</Nav.Link>
                                <Nav.Link href="#deets"><FaUserCircle /> Đăng nhập</Nav.Link>
                                <Nav.Link className='vertical' href="#deets"><FaUserEdit /> Đăng ký</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <Container fluid="xl" className='header__main'>
                    <Navbar className='navbar__main' variant="dark" expand="md" >
                        <div className='navbar__search'>
                            <Navbar.Brand href="/" className='d-none d-md-inline '>ANT ELECTRIC</Navbar.Brand>
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
                                    <div className='menu__item'>
                                        <div className='title__list'>
                                            <Nav.Link href="/productgroup">BIẾN TẦN</Nav.Link>
                                            <IoIosArrowForward/>
                                        </div>
                                        <Nav className='one__list' navbarScroll>
                                            <div className='one__list__item'>
                                                <Nav.Link href="/producer">SIEMENS</Nav.Link>
                                            </div>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">SCHNEIDER</Nav.Link>
                                            </div>
                                        </Nav>
                                    </div>
                                    <div className='menu__item'>
                                        <div className='title__list'>
                                            <Nav.Link href="#action1">PLC</Nav.Link>
                                            <IoIosArrowForward/>
                                        </div>
                                        <div className='one__list'>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">SCHNEIDER</Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='menu__item'>
                                        <div className='title__list'>
                                            <Nav.Link href="#action1">RELAY</Nav.Link>
                                            <IoIosArrowForward/>
                                        </div>
                                        <div className='one__list'>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">SCHNEIDER</Nav.Link>
                                            </div>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">OMRON</Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </div>
                            <div className='menu__home d-flex'>
                                <Nav.Link href="/home">TRANG CHỦ</Nav.Link>
                                <Nav.Link href="#action1">SẢN PHẨM</Nav.Link>
                                <Nav.Link href="#action1">DỊCH VỤ</Nav.Link>
                                <Nav.Link href="#action2">TÀI LIỆU</Nav.Link>
                                <Nav.Link href="#action2">GIỚI THIỆU</Nav.Link>
                            </div>
                        </div>
                    </Navbar>
                </Container>
            </div>

            <div className='header__bottom d-block d-md-none fixed-bottom'>
                <div className='navbar__bottom'>
                    <div className='d-flex justify-content-around w-100 py-2'>
                        <Nav.Link className='active' href="/">
                            <FaHome />
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FaAddressCard />
                            <span>Liên hệ</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FaAward />
                            <span>Bán chạy</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FaRegBell />
                            <span>Thông báo</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FaUser />
                            <span>Tôi</span>
                        </Nav.Link>
                    </div>
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
                    <Offcanvas.Title>DANH MỤC</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='menu__product'>
                    <div className='menu__product__content'>
                        <div className='menu__item' onClick={handleShowMbMenuProducer}>
                            <Nav.Link href="#action1" >BIẾN TẦN</Nav.Link>
                            <IoIosArrowForward/>
                        </div>
                        <div className='menu__item'>
                                <Nav.Link href="#action1">PLC</Nav.Link>
                                <IoIosArrowForward/>
                        </div>
                        <div className='menu__item'>
                                <Nav.Link href="#action1">RELAY</Nav.Link>
                                <IoIosArrowForward/>
                        </div>
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
                    <Offcanvas.Title>BIẾN TẦN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='menu__product'>
                    <div className='menu__product__content'>
                        <div className='menu__item'>
                            <Nav.Link href="#action1" onClick={handleCloseMobileMenu}>SIEMENS</Nav.Link>
                        </div>
                        <div className='menu__item'>
                            <Nav.Link href="#action1" onClick={handleCloseMobileMenu}>SCHNEIDER</Nav.Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}
