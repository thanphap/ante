import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    FaSearch,
    FaShoppingCart,
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
    FaAward
} from "react-icons/fa";

export default function Header() {
    // window.addEventListener('resize', () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (window.scrollY > 47) {
    //         setScrollHeader(true);  
    //     }
    //     else {
    //         setScrollHeader(false);
    //     }
    // });
    return (
        <header>
            <div className='header__top fixed__top'>
                <Container fluid="lg" className='py-0'>
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
                <Container fluid="lg" className='navbar__main'>
                    <Navbar className='navbar__end' variant="dark" expand="md" >
                        <div className='header__search'>
                            <Navbar.Brand href="#" className='d-none d-lg-inline '>ANT ELECTRIC</Navbar.Brand>
                            <div className='my-2 my-md-0 d-flex justify-content-around w-100'>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <div className='search'>
                                    <Form.Control className='header__input__search'
                                        type="search"
                                        placeholder="Tìm kiếm theo tên sản phẩm"
                                        aria-label="Search"
                                    />
                                    <Button className='button__search'><FaSearch /></Button>
                                </div>
                                <Button className='button__cart'><FaShoppingCart /></Button>
                            </div>
                        </div>
                        <Navbar.Collapse id="navbarScroll" className='navbar__menu'>
                            <Nav>
                                <div className='menu__product'>
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
                                <div className='d-none d-md-flex'>
                                    <Nav.Link href="#action1">TRANG CHỦ</Nav.Link>
                                    <Nav.Link href="#action1">SẢN PHẨM</Nav.Link>
                                    <Nav.Link href="#action1">DỊCH VỤ</Nav.Link>
                                    <Nav.Link href="#action2">TÀI LIỆU</Nav.Link>
                                    <Nav.Link href="#action2">GIỚI THIỆU</Nav.Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
            <div className='header__bottom d-block d-md-none fixed-bottom'>
                <div className='navbar__bottom'>
                    <div className='d-flex justify-content-around w-100 py-2'>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaHome/>
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaAddressCard/>
                            <span>Liên hệ</span>
                        </Nav.Link>
                        <Nav.Link className='d-flex flex-column align-items-center' href="#">
                            <FaAward/>
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
        </header>
    )
}
