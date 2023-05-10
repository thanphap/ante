import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import DoubleTabs from '../../components/DoubleTabs/DoubleTabs';
import { Link, NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Pagination from '../../components/Pagination/Pagination';
import { removeAccents } from '../../util/func';

export default function ProductType() {
  const [keyListRelated, setKeyListRelated] = useState('');
  const dataListProductType = [
    {
      "productTypeId": 1,
      "productTypeName": "AT44",
      "productTypeDetail": "...",
      "productTypeImage": "",
      "menuId": 3,
      "userId": 1,
      "createdTime": "2023-05-05T09:55:32.000Z"
    },
    {
      "productTypeId": 2,
      "productTypeName": "AT68",
      "productTypeDetail": "...",
      "productTypeImage": "",
      "menuId": 3,
      "userId": 1,
      "createdTime": "2023-05-05T09:55:40.000Z"
    }
  ];

  const dataProductType = {
    "productTypeId": 1,
    "productTypeName": "AT44",
    "productTypeDetail": "...",
    "productTypeImage": "",
    "menuId": 3,
    "userId": 1,
    "createdTime": "2023-05-05T09:55:32.000Z"
  }

  const dataProduct = [
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
  ];

  const dataTabs = {
    "tabId": dataProductType.productTypeId,
    "tabLeft": [
      {
        "tabLeftUrl":"/product-group",
        "tabLeftName":"Biến tần",
      },
      {
        "tabLeftUrl":"/product-type",
        "tabLeftName": dataProductType.productTypeName, 
      }
    ],
  }

  const renderMenu = (data) => {
    return data?.map((el) => {
      return <NavLink className='hadchild'
        key={`related${el.productTypeName}`}
        to={`/product-type/${removeAccents(el.productTypeName)}`}
        onClick={() => setKeyListRelated(el.productTypeName)}
      >
        <IoMdArrowDropright />
        <span>{el.productTypeName}</span>
      </NavLink>
    })
  };

  const renderResult = (data) => {
    return data?.map((el) => {
      return <Col className='result__item' key={`product${el.productName}`}>
        <div className='product__item'>
          <Link to={`/product-detail/${removeAccents(el.productName)}`}>
            <div className='product__image'>
              <img src={el.productImage} alt={el.productName} />
            </div>
            <div className='product__content'>
              <h4 className='product__name'>{el.productName}</h4>
              <div className='product__price'>{el.price}₫</div>
              <div className='product__rate'><b>{el.voted}</b><FaStar /></div>
            </div>
          </Link>
        </div>
      </Col>
    })
  }

  return (
    <div className='product__type product__style'>
      <Container fluid='lg'>
        <div className="product__style__title">
          <DoubleTabs dataTabs={dataTabs} />
        </div>
        <Row className='product__style__content'>
          <Col className='filter__panel d-none d-lg-block' lg={3} xl={2}>
            <div className='section__simple'>
              <div className='section__header'>
                <div className='section__header__title'>DANH MỤC</div>
              </div>
              <div className='section__content'>
                <Nav className='related__category' activeKey={keyListRelated}>
                  {renderMenu(dataListProductType)}
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
              {renderResult(dataProduct)}
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
