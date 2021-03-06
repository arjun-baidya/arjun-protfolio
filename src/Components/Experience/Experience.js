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
                            I have worked on Python, Django-Rest-Framework, React , Node, Odoo ERP.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <h1 className="experience-title">Software Engineer</h1>
                    <p className="experience-company">
                        <a href="https://www.linkedin.com/company/yukoleather/mycompany/">Yuko Leather Goods Limited.</a>
                        <span className="experience-date">(Sep,2020 - Ongoing)</span>
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop website in Python and Django-Rest-Framework.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop website in Node.Js and Express.Js
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                     Front-end design in React JS and Redux.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Resource planning for project development.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Custom Odoo development for project development and maintenance.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop business logic for business case project development.
                    </p>
                    <p className="experience-description">
                    <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                    Develop Odoo module and testing for business case project development.
                    </p>
                </Row>
                <Row className='mt-5'>
                    <h1 className="extra-experience-title">Remote Job and Other Professional Project Work</h1>
                    <div className='extra-experience-description'>
                        <p>
                        <FontAwesomeIcon className="starIcon" icon={faStarOfDavid} />
                            <span className='extra-experi-title'>Customize API for UNICEF U-report Project.
                            <span className='extra-experi-date'>(October 2020 - Nobember 2020)</span>
                            </span><br/>
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
