import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faReact,faPython,faNodeJs,faJs,faNpm,faHtml5,faCss3,faBootstrap,faGithubSquare,faGitSquare
 } from '@fortawesome/free-brands-svg-icons'
import './skills.css'


function Skills() {
    return (
        <div className="skills-full-div">
            <Container>
                <h2>What I Do? </h2>
                <Row>
                    <Col sm={12} md={6} className="skill-left-col">
                        <Image src="./fullstack.svg" className="skills-image" fluid />
                    </Col>
                    <Col sm={12} md={6} className="skill-right-col">
                        <p className="skills-title">Full-Stack Development</p>
                        <div className="skills-social-icon-div">
                            <FontAwesomeIcon icon={faReact} className="skills-icon-react" title="React"/>
                            <FontAwesomeIcon icon={faPython} className="skills-icon-python" title="Python" />
                            <FontAwesomeIcon icon={faNodeJs} className="skills-icon-node" title="Node JS" />
                            <FontAwesomeIcon icon={faJs} className="skills-icon-js" title="JavaScript" />
                            <FontAwesomeIcon icon={faNpm} className="skills-icon-npm" title="NPM" />
                            <FontAwesomeIcon icon={faGithubSquare} className="skills-icon-github" title="GitHub" />
                            <FontAwesomeIcon icon={faGitSquare} className="skills-icon-git" title="Git" />
                            <FontAwesomeIcon icon={faHtml5} className="skills-icon-html" title="HTML" />
                            <FontAwesomeIcon icon={faCss3} className="skills-icon-css" title="CSS" />
                            <FontAwesomeIcon icon={faBootstrap} className="skills-icon-bootstrap" title="Bootstrap" />
                        </div>
                        <div className="skills-arrow-div">
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Building resposive website front-end using React-Redux and Context-API.
                            </p>
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Developing backend using Django, Django-Rest-API, NodeJS, ExpressJS,Sql,PostGreSql, MongoDB and Mongoose.
                            </p>
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Developing custom ERP system using Odoo.
                            </p>
                        </div>
                    </Col>
                </Row>
                 
                {/* <Row>
                    <Col sm={12} md={6} className="skill-left-col">
                        <Image src="./cloud_infrastructure.svg" className="skills-image" fluid />
                    </Col>
                    <Col sm={12} md={6} className="skill-right-col">
                        <p className="skills-title">Cloud Infra-Architecture</p>
                        <div className="skills-social-icon-div">
                            <FontAwesomeIcon icon={faReact} className="skills-icon-react" title="React"/>
                            <FontAwesomeIcon icon={faPython} className="skills-icon-python" title="Python" />
                            <FontAwesomeIcon icon={faNodeJs} className="skills-icon-node" title="Node JS" />
                            <FontAwesomeIcon icon={faJs} className="skills-icon-js" title="JavaScript" />
                            <FontAwesomeIcon icon={faNpm} className="skills-icon-npm" title="NPM" />
                            <FontAwesomeIcon icon={faHtml5} className="skills-icon-html" title="HTML" />
                            <FontAwesomeIcon icon={faCss3} className="skills-icon-css" title="CSS" />
                            <FontAwesomeIcon icon={faBootstrap} className="skills-icon-bootstrap" title="Bootstrap" />
                        </div>
                        <div className="skills-arrow-div">
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Building resposive website front end using React-Redux
                            </p>
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Developing mobile applications using Flutter, React Native and solo android apps using Kotlin.
                            </p>
                            <p className="skills-arrow-text">
                                <FontAwesomeIcon icon={faAngleRight} className="skills-arrow-icon" />
                                Creating application backend in Node, Express & Flask.
                            </p>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default Skills
