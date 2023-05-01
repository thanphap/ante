import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import DoubleTabs from '../../components/DoubleTabs/DoubleTabs';
import { Link } from 'react-router-dom';
import {
  FaStar
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Pagination from '../../components/Pagination/Pagination';

export default function ProductType() {
  return (
    <div className='product__type product__style'>
      <Container fluid='lg'>
        <div className="product__style__title">
          <DoubleTabs />
        </div>
        <Row className='product__style__content'>
          <Col className='filter__panel d-none d-lg-block' lg={3} xl={2}>
            <div className='section__simple'>
              <div className='section__header'>
                <div className='section__header__title'>DANH MỤC</div>
              </div>
              <div className='section__content'>
                <Nav className='related__category' activeKey="ATV12">
                  <Nav.Link className='hadchild' eventKey="ATV12"><IoMdArrowDropright /><span>ATV12</span> </Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV212"><IoMdArrowDropright /><span>ATV212</span></Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV312"><IoMdArrowDropright /><span>ATV312</span></Nav.Link>
                  <Nav.Link className='hadchild' eventKey="ATV32"><IoMdArrowDropright /><span>ATV71</span></Nav.Link>
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
            <Row className='result__content' xs={2} sm={3} md={4} xl={5}>
              <Col className='result__item'>
                <div className='product__item'>
                  <Link to="/productdetail">
                    <div className='product__image'>
                      <img src="https://picsum.photos/600/600?random=140" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H018M2</h4>
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
                      <img src="https://picsum.photos/600/600?random=141" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H018F1</h4>
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
                      <img src="https://picsum.photos/600/600?random=142" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H018M3</h4>
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
                      <img src="https://picsum.photos/600/600?random=143" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H037F1</h4>
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
                      <img src="https://picsum.photos/600/600?random=144" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H037M2</h4>
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
                      <img src="https://picsum.photos/600/600?random=145" alt='12' />
                    </div>
                    <div className='product_content'>
                      <h4 className='product__name'>ATV12H037M3</h4>
                      <div className='product__price'>27.290.000₫</div>
                      <div className='product__rate'><b>4.6</b><FaStar /></div>
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
            <div className='pagination__content d-none d-md-block'>
              <Pagination />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
