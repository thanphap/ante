import React from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
import './style.scss'

export default function About() {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Carousel 
                        variant="dark" 
                        slide={false} 
                        controls={false}
                        >
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src="https://picsum.photos/1536/631?random=12"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block "
                                src="https://picsum.photos/1536/631?random=13"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src="https://picsum.photos/1536/631?random=14"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </div>
    )
}
