import React from 'react'
import {Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faYoutube,faLinkedin,faGithub,faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import './contact.css'

function Contact() {
    return (
        <div className="contactme-full-div">
            <Container>
                <Row className="mycontact-row">
                    <Col sm={12} md={5} className="my-image-col" >
                        <Image src="./accpic.jpg" className="my-image" fluid />
                    </Col>
                    <Col sm={12} md={7} className="my-contact-col">
                        <h1>Contact Me</h1>
                        <p>
                            I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.
                        </p>
                        <div className="social-icons">
                        <a href="https://www.linkedin.com/in/arjun-baidya13/" target="blank">
                            <FontAwesomeIcon className="icon-class" icon={faLinkedin} />
                        </a>
                        <FontAwesomeIcon className="icon-class" icon={faYoutube} />
                        <FontAwesomeIcon className="icon-class" icon={faFacebook} />
                        <a href="https://github.com/arjun-baidya" target="blank">
                        <FontAwesomeIcon className="icon-class" icon={faGithub} />
                        </a>
                        <a href="https://stackoverflow.com/users/12262434/arjun-baidya" target="blank">
                        <FontAwesomeIcon className="icon-class" icon={faStackOverflow} />
                        </a>
                        </div>
                        <div className="button-div">
                            <Button className="resume-btn">
                                <a href="https://drive.google.com/file/d/1Kjlc3JCEuO7FzJKLJTodsnz4QhSOuQzS/view?usp=sharing" target="blank">See My Resume</a>
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className="blog-row">
                    <Col sm={12} md={6} className="blog-left-col">
                        <h1>Blogs</h1>
                        <p>For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.
                        </p>
                        <div className="button-div">
                            <Button className="resume-btn">
                                <a href="https://drive.google.com/file/d/1Kjlc3JCEuO7FzJKLJTodsnz4QhSOuQzS/view?usp=sharing" target="blank">Visit My Blogs</a>
                            </Button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="blog-right-col">
                        <Image src="./blogs_image.svg" className="blog-image" fluid />
                    </Col>
                </Row>

                <Row className="address-row">
                    <Col sm={12} md={6} className="address-left-col">
                        <Image src="./address_image.svg" className="address-image" fluid />
                    </Col>
                    <Col sm={12} md={6} className="address-right-col">
                        <h1>Address</h1>
                        <p>
                            <span> Uttora sector-8, Dhaka, Bangladesh </span>
                        </p>
                        <h1>Phone Number</h1>
                        <p> +8801759072768 </p>
                        <h1>Email</h1>
                        <p> arjun.chandra.baidya@gmail.com </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
