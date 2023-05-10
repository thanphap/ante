import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import DoubleTabs from '../../components/DoubleTabs/DoubleTabs';
import { Link, NavLink } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import Pagination from '../../components/Pagination/Pagination';
import { removeAccents } from '../../util/func';

export default function Producer() {
  const [keyListRelated, setKeyListRelated] = useState('');
  const dataListProducer = [
    {
      "producerId": 1,
      "producerName": "Siemens",
      "producerDetail": "...",
      "producerImage": "http://localhost:4000/static/producer/1680096305983-76044496-do khoang cach rf.jpg",
      "userId": 1,
      "createdProducer": null
    },
    {
      "producerId": 2,
      "producerName": "Delta",
      "producerDetail": "abc",
      "producerImage": null,
      "userId": 1,
      "createdProducer": null
    }
  ];

  const dataProductType = [
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

  const dataProducer = {
    "producerId": 1,
    "producerName": "Siemens",
    "producerDetail": "...",
    "producerImage": "http://localhost:4000/static/producer/1680096305983-76044496-do khoang cach rf.jpg",
    "userId": 1,
    "createdProducer": null,
    "productGroupMenu": [
      {
        "productGroupId": 1,
        "productGroupName": "Biến tần",
        "productGroupImage": "http://localhost:4000/static/productgroup/1680097267217-100718436-do khoang cach rf.jpg",
        "createdTime": null,
        "menu": {
          "menuId": 3,
          "menuName": "Biến tần Siemens",
          "productGroupId": 1,
          "producerId": 1,
          "createdMenu": "2023-05-05T09:50:18.000Z"
        }
      }
    ]
  };

  const dataTabs = {
    "tabId": dataProducer.producerId,
    "tabLeft": [
      {
        "tabLeftUrl":"/producer",
        "tabLeftName":dataProducer.producerName,
      },
    ],
    "tabRight": dataProducer.productGroupMenu.map((el) => {
      return {
        "tabRightId": el.productGroupId,
        "tabRightName": el.productGroupName,
      }
    })
  };

  const renderMenu = (data) => {
    return <Nav className='related__category' activeKey={keyListRelated}>
      {data?.map((el) => {
        return <NavLink className='hadchild'
          key={`related${el.producerName}`}
          to={`/producer/${removeAccents(el.producerName)}`}
          onClick={() => setKeyListRelated(el.producerName)}
        >
          <IoMdArrowDropright />
          <span>{el.producerName}</span>
        </NavLink>
      })}
    </Nav>
  }

  const renderResult = (data) => { 
    return data.map((el) => {
      return <Col className='result__item' key={`producttype${el.productTypeName}`}>
        <div className='product__item'>
          <Link to={`/product-type/${removeAccents(el.productTypeName)}`}>
            <div className='product__image'>
              <img src={el.productTypeImage} alt={el.productTypeName} />
            </div>
            <div className='product__content'>
              <h4 className='product__name'>{el.productTypeName}</h4>
              <div className='product__rate'><b>4.6</b><FaStar /></div>
            </div>
          </Link>
        </div>
      </Col>
    })
   }

  return (
    <div className='producer product__style'>
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
                {renderMenu(dataListProducer)}
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
              {renderResult(dataProductType)}
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
