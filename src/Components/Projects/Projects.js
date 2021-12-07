import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import './projects.css'

function Projects() {
    return (
        <div className="projects-full-div">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <Image src="./projects_image.svg" fluid />
                    </Col>
                    <Col sm={12} md={6}>
                        <h1 className="project-heading">Projects</h1>
                        <p className="project-description">
                            My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.
                        </p>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-5">
                    <Col>
                    <Card className="card-section">
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
                    <Card className="card-section">
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
                    <Card className="card-section">
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
                    <Card className="card-section">
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
                    <Card className="card-section">
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
                    <Card className="card-section">
                        <Card.Img variant="top" src="" />
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

export default Projects
