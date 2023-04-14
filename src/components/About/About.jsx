import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper';
import { Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './style.scss'

export default function About() {
    const content = [
        "Giới thiệu chung",
        "Năng lực công nghệ",
        "Tại sao nên chọn ATNE là đối tác.",
        "Tầm nhìn - Sứ mệnh - Giá trị cốt lõi",
        "Các thương hiệu",
        "Giải thưởng",
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="about__title ' + className + '"> ' + content[index] + "</span>";
        },
    };
    return (
        <div className='about'>
            <Container fluid="lg">
                <div className='about__content'>
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            pauseOnMouseEnter: true,
                        }}
                        effect='fade'
                        pagination={pagination}
                        modules={[EffectFade, Autoplay, Pagination]}
                        className='about__swiper'
                    >
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=1" alt='12' />
                                </div>
                                <div className='about__caption'>
                                    <span>ATDE là nhà cung cấp thiết bị, giải pháp tự động hóa và tích hợp robot công nghiệp hàng đầu tại Việt Nam.<br/>
                                        Hiện tại chúng tôi có hơn 200.000 sản phẩm được chỉ định là nhà phân phối của các thương hiệu: Schneider, Autonics, Omron, Hanyoung, Patlite, LS, Delta, Siemens, Idec,... .</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=2" alt='12' />
                                </div>
                                <div className='about__caption' >
                                    <span>Dựa trên những đầu tư nghiên cứu phát triển công nghệ bài bản trong nhiều năm qua và sự nhanh nhạy trong việc nắm bắt những xu hướng công nghệ mới, Hợp Long đã tập trung xây dựng các công nghệ lõi, nâng cao năng lực công nghệ và năng lực cạnh tranh cho công ty...<br/>
                                        1. Trí tuệ nhân tạo - công nghệ mũi nhọn<br/>
                                        Đội ngũ lập trình viên tại Hợp Long đã dành hàng ngàn giờ phát triển những ứng dụng trong lĩnh vực bán hàng và quản lý sản xuất nhằm tăng trải nghiệm của khách hàng khi mua hàng hoặc sử dụng dịch vụ tại Hợp Long<br/>
                                        2. Khai thác nền tảng công nghệ IoT<br/>
                                        Hợp Long đang là đối tác quan trọng và tin cậy của các tập đoàn hàng đầu: Schneider, Patlite,... trong việc triển khai các dự án IoT tại các nhà máy.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=3" alt='12' />
                                </div>
                                <div className='about__caption' >
                                    <span>
                                        Bằng những nỗ lực không ngừng nghỉ trong hoạt động kinh doanh, cho đến thời điểm hiện tại chúng tôi đã có mặt tại 4 thành phố lớn nhất cả nước: Hà Nội, Hải Phòng, Đà Nẵng và thành phố Hồ Chí Minh.
                                        Đến với Hợp Long, Quý khách hàng sẽ được cam kết tuyệt đối về
                                        1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ
                                        2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.
                                        3. Hàng có sẵn tại kho số lượng lớn
                                        4. Giao hàng nhanh, miễn phí
                                        5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí.
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=4" alt='12' />
                                </div>
                                <div className='about__caption' >
                                    <span>
                                        Bằng những nỗ lực không ngừng nghỉ trong hoạt động kinh doanh, cho đến thời điểm hiện tại chúng tôi đã có mặt tại 4 thành phố lớn nhất cả nước: Hà Nội, Hải Phòng, Đà Nẵng và thành phố Hồ Chí Minh.
                                        Đến với Hợp Long, Quý khách hàng sẽ được cam kết tuyệt đối về
                                        1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ
                                        2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.
                                        3. Hàng có sẵn tại kho số lượng lớn
                                        4. Giao hàng nhanh, miễn phí
                                        5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí.
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=5" alt='12' />
                                </div>
                                <div className='about__caption' >
                                    <span>
                                        Bằng những nỗ lực không ngừng nghỉ trong hoạt động kinh doanh, cho đến thời điểm hiện tại chúng tôi đã có mặt tại 4 thành phố lớn nhất cả nước: Hà Nội, Hải Phòng, Đà Nẵng và thành phố Hồ Chí Minh.
                                        Đến với Hợp Long, Quý khách hàng sẽ được cam kết tuyệt đối về
                                        1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ
                                        2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.
                                        3. Hàng có sẵn tại kho số lượng lớn
                                        4. Giao hàng nhanh, miễn phí
                                        5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí.
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='about__item'>
                                <div className='about__image'>
                                    <img src="https://picsum.photos/600/600?random=6" alt='12' />
                                </div>
                                <div className='about__caption' >
                                    <span>
                                        Bằng những nỗ lực không ngừng nghỉ trong hoạt động kinh doanh, cho đến thời điểm hiện tại chúng tôi đã có mặt tại 4 thành phố lớn nhất cả nước: Hà Nội, Hải Phòng, Đà Nẵng và thành phố Hồ Chí Minh.
                                        Đến với Hợp Long, Quý khách hàng sẽ được cam kết tuyệt đối về
                                        1. Hàng chính hãng, giá tốt, đầy đủ CO/CQ
                                        2. Đội ngũ nhân viên tư vấn nhiệt tình, chuyên môn cao.
                                        3. Hàng có sẵn tại kho số lượng lớn
                                        4. Giao hàng nhanh, miễn phí
                                        5. Hỗ trợ kỹ thuật 24/7, lắp đặt, bảo hành miễn phí.
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
