import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub,faStackOverflow} from '@fortawesome/free-brands-svg-icons'
// import { faBolt } from '@fortawesome/fontawesome-svg-core'
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
                        {/* <FontAwesomeIcon className="education-icon" icon={faGithub} />
                        <FontAwesomeIcon className="education-icon" icon={faStackOverflow} /> */}
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
                                <Card.Text className="versity-name">
                                    <p>Daffodil International University,Dhaka, Bangladesh.</p>
                                    <p>BSc In Computer Science & Engineering(CSE)</p>
                                    <p >2015 to 2019</p>
                                </Card.Text>
                                <Button className="versity-button"
                                href='https://www.daffodilvarsity.edu.bd/'
                                target="blank"
                                >Visit Versity</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1 className="certification-title">Certification</h1>
                <Row xs={1} md={4} className="g-4 certification">
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/django-train.png" />
                        <Card.Body>
                        <Card.Title className='training-title'>Django</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/django-python.jpg" />
                        <Card.Body>
                        <Card.Title className='training-title'>Python Django</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/data-science.png" />
                        <Card.Body>
                        <Card.Title className='training-title'>Data Science</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/sql-train.png" />
                        <Card.Body>
                        <Card.Title className='training-title'>SQL</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/customer-analysis.png" />
                        <Card.Body>
                        <Card.Title className='training-title'>Customer Analysis</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="training-card">
                        <Card.Img variant="top" src="./images/training/tableau.png" />
                        <Card.Body>
                        <Card.Title className='training-title'>Tableau</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
            </Container>
        </div>
)
}
export default Education
