import React from 'react'
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
    FaFacebook,
    FaRegBell,
    FaRegQuestionCircle,
    FaUserCircle,
    FaUserEdit
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./style.css";

export default function Header() {
    return (
        <header className='header'>
            <Container className='py-0'>
                <Navbar className='navbar__top py-0' expand="lg" variant="dark">
                    <Navbar.Collapse className="navbar__top__content justify-content-between">
                        <Nav className='navbar__top__left'>
                            <Nav.Link className='vertical' href="#features"><FaMapMarkerAlt /> Bình Dương</Nav.Link>
                            <Nav.Link className='vertical'><FaEnvelope /> Linh@gmail.com</Nav.Link>
                            <Navbar.Text className='vertical'>Kết nối</Navbar.Text>
                            <Nav.Link href="#pricing"><FaFacebook /></Nav.Link>
                            <Nav.Link href="#pricing"><SiZalo className='zalo' /></Nav.Link>

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
            <Container>
                <Navbar className='navbar__end' variant="dark" expand="lg" >
                    <div className='header__search'>
                        <Navbar.Brand href="#" className='d-none d-lg-inline '>ANT ELECTRIC</Navbar.Brand>
                        <div className='my-2 my-lg-0 d-flex justify-content-around w-100'>
                            <div className='search'>
                                <Form.Control className='header__input__search'
                                    type="search"
                                    placeholder="Tìm kiếm theo tên sản phẩm"
                                    aria-label="Search"
                                />
                                <Button className='button__search'><FaSearch /></Button>
                            </div>
                            <Button className='button__cart'><FaShoppingCart /></Button>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                        </div>
                    </div>
                    <Navbar.Collapse id="navbarScroll" className='navbar__menu'>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">TRANG CHỦ</Nav.Link>
                            <Nav.Link href="#action1">SẢN PHẨM</Nav.Link>
                            <Nav.Link href="#action1">DỊCH VỤ</Nav.Link>
                            <Nav.Link href="#action2">TÀI LIỆU</Nav.Link>
                            <Nav.Link href="#action2">GIỚI THIỆU</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}
