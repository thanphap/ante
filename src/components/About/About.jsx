import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

export default function About() {
    const dataAbout = [
        {
            "aboutId": 1,
            "aboutImage": "https://picsum.photos/1536/631?random=18",
            "aboutTitle": "Giới thiệu chung",
            "aboutContent": "ATDE là nhà cung cấp thiết bị, giải pháp tự động hóa và tích hợp robot công nghiệp hàng đầu tại Việt Nam.<br />Hiện tại chúng tôi có hơn 200.000 sản phẩm được chỉ định là nhà phân phối của các thương hiệu: Schneider, Autonics, Omron, Hanyoung, Patlite, LS, Delta, Siemens, Idec,... ."
        },
        {
            "aboutId": 2,
            "aboutImage": "https://picsum.photos/1536/631?random=19",
            "aboutTitle": "Năng lực công nghệ",
            "aboutContent": "Dựa trên những đầu tư nghiên cứu phát triển công nghệ bài bản trong nhiều năm qua và sự nhanh nhạy trong việc nắm bắt những xu hướng công nghệ mới.<br/>1. Trí tuệ nhân tạo - công nghệ mũi nhọn<br/>2. Khai thác nền tảng công nghệ IoT"
        },
        {
            "aboutId": 3,
            "aboutImage": "https://picsum.photos/1536/631?random=20",
            "aboutTitle": "Tại sao nên chọn ATNE là đối tác",
            "aboutContent": "Đến với chúng tôi, Quý khách hàng sẽ được cam kết tuyệt đối về<br/>1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ<br/>2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.<br/>3. Hàng có sẵn tại kho số lượng lớn<br/>4. Giao hàng nhanh, miễn phí<br/>5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí."
        },
    ];

    const renderAbout = (data) => { 
        return data.map((el) => {
            return <Carousel.Item key={`about${el.aboutId}`}>
                <Row>
                    <Col md={5} className='about__left' >
                        <Carousel.Caption>
                            <h3>{el.aboutTitle}</h3>
                            <p>{el.aboutContent}</p>
                        </Carousel.Caption>
                    </Col>
                    <Col md={7} className='about__right ms-auto'>
                        <div className='carousel__image'>
                            <img src={el.aboutImage}
                                alt="ANTE"
                            />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        })
     }

    return (
        <div className='about'>
            <Container fluid className='about__content'>
                <Carousel slide={false} controls={true}>
                    {renderAbout(dataAbout)}
                </Carousel>
            </Container>
        </div>
    )
}
