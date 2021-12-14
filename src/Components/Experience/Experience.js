import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import './experience.css'

function Experience() {
    return (
        <div className="experience-full-div">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Image src="./experience.svg" fluid />
                    </Col>
                    <Col sm={12} md={6}>
                        <h1 className="experience-name">Experience</h1>
                        <p>
                            I have been working as a software engineer for the past two years. I have worked on a variety of projects, ranging from small to large scale.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <h1 className="experience-title">Software Engineer</h1>
                    <p className="experience-company">
                        <a href="https://www.linkedin.com/company/cognizant-technologies-limited/">Yuko Leather Goods Limited</a>
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    I have been working as a software engineer for the past two years. I have worked on a variety of projects, ranging from small to large scale.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop website in Python and Django
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop website in Node.Js and Express.Js
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                     Front-end design in React JS
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Use Micro-services
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Resource planning for project development
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Custom Odoo development for project
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop business logic for business case project
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop Odoo module and testing
                    </p>
                </Row>
                <Row className='mt-5'>
                    <h1 className="extra-experience-title">Remote Job and Other Professional Project Work</h1>
                    <div className='extra-experience-description'>
                        <p>
                        <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                            <span className='extra-experi-title'>Customize API for UNICEF U-report Project.</span><br/>
                            <p className='extra-expei-des'>Dynamic API for UNICEF U-report Project.</p>
                            <p className='extra-expei-des'>Return data dynamically from UNICEF API.</p>
                            <p className='extra-expei-des'> Specific field data return from API.</p>
                            <p className='extra-expei-des'>Specific field data avoid from API.</p>
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Experience
