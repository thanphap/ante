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
    FaArrowLeft
} from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrollHeader, setScrollHeader] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            setScrollHeader(true);
        }
        else {
            setScrollHeader(false);
        }
    });
    return (
        <header>
            <div className={scrollHeader ? 'header__wrap nav__fixed' : 'header__wrap'}>
                <Container fluid="lg" className='header__top py-0'>
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
                <Container fluid="lg" className='header__main'>
                    <Navbar className='navbar__main' variant="dark" expand="md" >
                        <div className='navbar__search'>
                            <Navbar.Brand href="#" className='d-none d-md-inline '>ANT ELECTRIC</Navbar.Brand>
                            <div className='my-2 my-md-0 d-flex justify-content-around w-100'>
                                <Button className='button__menu d-md-none' onClick={handleShow}>
                                    <FaBars />
                                </Button>
                                <div className='search__wrap'>
                                    <Form.Control className='input__search'
                                        type="text"
                                        placeholder="Tìm kiếm theo tên sản phẩm"
                                        aria-label="Search"
                                    />
                                    <Button className='button__search'><FaSearch /></Button>
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
                                <div className='menu__product__content'>
                                    <div className='menu__item'>
                                        <div className='title__list'>
                                            <Nav.Link href="#action1">BIẾN TẦN</Nav.Link>
                                        </div>
                                        <div className='one__list'>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">SIEMENS</Nav.Link>
                                            </div>
                                            <div className='one__list__item'>
                                                <Nav.Link href="#action1">SCHNEIDER</Nav.Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='menu__item'>
                                        <div className='title__list'>
                                            <Nav.Link href="#action1">PLC</Nav.Link>
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
                                </div>
                            </div>
                            <div className='menu__home d-flex'>
                                <Nav.Link href="#action1">TRANG CHỦ</Nav.Link>
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
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaHome />
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaAddressCard />
                            <span>Liên hệ</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaAward />
                            <span>Bán chạy</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaRegBell />
                            <span>Thông báo</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaUser />
                            <span>Tôi</span>
                        </Nav.Link>
                    </div>
                </div>
            </div>
            <Offcanvas className='mobile__menu'
                show={show}
                onHide={handleClose}
                scroll={true}
            >
                <Offcanvas.Header>
                    <FaArrowLeft onClick={handleClose}/>
                    <Offcanvas.Title>DANH MỤC</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='menu__product'>
                    <div className='menu__product__title d-none d-md-block'>
                        <FaBars />
                        <span>DANH MỤC</span>
                    </div>
                    <div className='menu__product__content'>
                        <div className='menu__item'>
                            <div className='title__list'>
                                <Nav.Link href="#action1">BIẾN TẦN</Nav.Link>
                            </div>
                            <div className='one__list'>
                                <div className='one__list__item'>
                                    <Nav.Link href="#action1" onClick={handleClose}>SIEMENS</Nav.Link>
                                </div>
                                <div className='one__list__item'>
                                    <Nav.Link href="#action1" onClick={handleClose}>SCHNEIDER</Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className='menu__item'>
                            <div className='title__list'>
                                <Nav.Link href="#action1">PLC</Nav.Link>
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
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}
