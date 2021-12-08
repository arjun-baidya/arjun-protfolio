import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { faBolt } from '@fortawesome/fontawesome-svg-core'
import './education.css'
function Education() {
    return (
        <div className="education-full-div">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Image className="edu-image" src="./education.svg" fluid />
                    </Col>
                    <Col sm={12} md={6}>
                        <h1 className="education">Education</h1>
                        <p className="education-title">Basic Qualification and Certifcations</p>
                        <FontAwesomeIcon className="education-icon" icon={faGithub} />
                        <FontAwesomeIcon className="education-icon" icon={faStackOverflow} />
                    </Col>
                </Row>

                <Row>
                    <h1 className="degree-title">Degree Received</h1>
                    <Col sm={12} md={2} className="versity-image-col">
                        <Image className="versity-image" src="./daffodil.png" fluid />
                    </Col>
                    <Col sm={12} md={10} className="versity-information-col" >
                        <Card className="edu-card">
                            <Card.Body>
                                <Card.Title className="versity-name">
                                    <p>Daffodil International University,Dhaka, Bangladesh.</p>
                                    <p>BSc In Computer Science & Engineering(CSE)</p>
                                    <p >2015 to 2019</p>
                                </Card.Title>
                                <Card.Text>
                                    <FontAwesomeIcon icon="fa-solid fa-bolt" />
                                    Bachelor of Science in Computer Science and Engineering
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1 className="certification-title">Certification</h1>
                <Row xs={1} md={4} className="g-4 certification">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
)
}
export default Education
