import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarTimes
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import './style.scss'

export default function Footer() {
  return (
    <footer className='mt-5'>
      <div className='footer'>
      <Container>
        <Row>
          <Col>
            <div className='footer__logo'>
              <h2 >ANT ELECTRIC</h2>
            </div>
            <div className='footer__content'>
              <ul className='footer__menu'>
                <li><Link to="#"><FaMapMarkerAlt/><span></span></Link></li>
                <li><Link to="#"><FaEnvelope/><span></span></Link></li>
                <li><Link to="#"><FaPhoneAlt/><span></span></Link></li>
                <li><Link to="#"><FaCalendarTimes/><span>Mở cửa: 8h00 -20h30</span></Link></li>
              </ul>
            </div>
          </Col>
          <Col>
            <h3 className='footer__title'>GIỚI THIỆU</h3>
            <div className='footer__content'>
              <ul className='footer__menu'>
                <li className='hotline'><Link to="#"><IoIosArrowForward/><span>Hotline: </span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Về ANT ELECTRIC</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Tuyển dụng</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Liên hệ</span></Link></li>
              </ul>
            </div>
          </Col>
          <Col>
            <h3 className='footer__title'>CHĂM SÓC KHÁCH HÀNG</h3>
            <div className='footer__content'>
              <ul className='footer__menu'>
                <li><Link to="#"><IoIosArrowForward/><span>Tài liệu thiết bị</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Hướng dẫn mua hàng</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Hình thức thanh toán</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Khuyến mãi</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Hỏi đáp</span></Link></li>
              </ul>
            </div>
          </Col>
          <Col>
            <h3 className='footer__title'>THANH TOÁN</h3>
            <div className='footer__content'>
              <ul className='footer__menu'>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách bảo mật</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách bảo hành</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách vận chuyển / Lắp đặt</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách đổi trả / Hoàn tiền</span></Link></li>
              </ul>
            </div>
          </Col>
          <Col>
            <h3 className='footer__title'>CHÍNH SÁCH/ĐIỀU KHOẢN</h3>
            <div className='footer__content'>
              <ul className='footer__menu'>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách bảo mật</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách bảo hành</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách vận chuyển / Lắp đặt</span></Link></li>
                <li><Link to="#"><IoIosArrowForward/><span>Chính sách đổi trả / Hoàn tiền</span></Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className='copyright'>Copyright by Q</div>
    </footer>

  )
}
