import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import DoubleTabs from '../../components/DoubleTabs/DoubleTabs';
import { Link } from 'react-router-dom';
import {
  FaStar
} from "react-icons/fa";
import { IoMdArrowDropright} from "react-icons/io";
import Pagination from '../../components/Pagination/Pagination';

export default function ProductGroup() {
  return (
    <div className='product__group'>
      <Container fluid='lg'>
        <div className="product__group__title">
          <DoubleTabs />
        </div>
        <Row className='product__group__content'>
          <Col className='filter__panel d-none d-lg-block' lg={3} xl={2}>
            <div className='section__simple'>
              <div className='section__header'>
                <div className='section__header__title'>DANH MỤC</div>
              </div>
              <div className='section__content'>
                <Nav className='related__category'>
                  <Nav.Link className='hadchild' eventKey="ATV12"><IoMdArrowDropright /><span>Biến tần</span> </Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV212"><IoMdArrowDropright /><span>Cầu dao dạng khối</span></Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV312"><IoMdArrowDropright /><span>Áp to mát (MCB)</span></Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV32"><IoMdArrowDropright /><span>Relay</span></Nav.Link>
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
          <Col className='result__content' xs={12} lg={9} xl={10}>
            <Row xs={2} sm={3} md={4} xl={5}>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=130" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=131" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=132" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=133" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=134" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="#">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=135" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>RU4S-D24</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className='pagination__content d-none d-md-block'>
              <Pagination/>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
