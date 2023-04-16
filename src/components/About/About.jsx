import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

export default function About() {
    return (
        <div className='about'>
            <Container fluid className='about_content'>
                <Carousel slide={false} controls={false}>
                    <Carousel.Item>
                        <Row>
                            <Col className='about__left' md={5}>
                                <Carousel.Caption>
                                    <h3>Giới thiệu chung</h3>
                                    <p>ATDE là nhà cung cấp thiết bị, giải pháp tự động hóa và tích hợp robot công nghiệp hàng đầu tại Việt Nam.<br />
                                        Hiện tại chúng tôi có hơn 200.000 sản phẩm được chỉ định là nhà phân phối của các thương hiệu: Schneider, Autonics, Omron, Hanyoung, Patlite, LS, Delta, Siemens, Idec,... .</p>
                                </Carousel.Caption>
                            </Col>
                            <Col md={7} className='ms-auto'>
                                <div className='carousel-image'>
                                    <img src="https://picsum.photos/1536/631?random=18"
                                        alt="First slide"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col className='about__left' md={5}>
                                <Carousel.Caption>
                                    <h3>Năng lực công nghệ</h3>
                                    <p>Dựa trên những đầu tư nghiên cứu phát triển công nghệ bài bản trong nhiều năm qua và sự nhanh nhạy trong việc nắm bắt những xu hướng công nghệ mới.<br/>
                                        1. Trí tuệ nhân tạo - công nghệ mũi nhọn<br/>
                                        2. Khai thác nền tảng công nghệ IoT
                                    </p>
                                        
                                </Carousel.Caption>
                            </Col>
                            <Col md={7} className='ms-auto'>
                                <div className='carousel-image'>
                                    <img src="https://picsum.photos/1536/631?random=19"
                                        alt="First slide"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col className='about__left' md={5}>
                                <Carousel.Caption>
                                    <h3>Tại sao nên chọn ATNE là đối tác</h3>
                                    <p>
                                        Đến với chúng tôi, Quý khách hàng sẽ được cam kết tuyệt đối về<br/>
                                        1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ<br/>
                                        2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.<br/>
                                        3. Hàng có sẵn tại kho số lượng lớn<br/>
                                        4. Giao hàng nhanh, miễn phí<br/>
                                        5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí.</p>
                                </Carousel.Caption>
                            </Col>
                            <Col md={7} className='ms-auto'>
                                <div className='carousel-image'>
                                    <img src="https://picsum.photos/1536/631?random=20"
                                        alt="First slide"
                                    />
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </div>
    )
}
