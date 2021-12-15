import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faYoutube,faLinkedin,faGithub,faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import './banner.css'

function Banner() {
    return (
        <div className="banner-full-div">
            <Container>
                <Row className="banner-row">
                <Col sm={12} md={6}>
                    <p className="name-class">Arjun Baidya</p>    
                    <p className="about-class">
                    I am a full-stack developer with industry experience. I have a passion for building web applications and I am always looking for new challenges to learn and grow.<br/>
                    {/* I developed many small to large projects. <br/> */}
                    A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
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
                </Col>
                <Col sm={12} md={6}>
                    <Image src="./feelingProud.svg" fluid />
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Banner
