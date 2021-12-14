import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
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
                        <Card.Img variant="top" src="./bike-pro-img.png" fluid />
                        <Card.Body>
                        <Card.Title>Bike Project</Card.Title>
                        <Card.Text>
                            This a bike project which is a front-end project which is deployed on github.
                            Made by Html and CSS.
                        </Card.Text>
                        <Button  href='https://arjun-baidya.github.io/honda-collection/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/honda-collection' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./panda-ecom-pro-img.png" fluid/>
                        <Card.Body>
                        <Card.Title>Panda E-commerce</Card.Title>
                        <Card.Text>
                            This is a e-commerce project which is a front-end project.
                            Made by Html and CSS.
                        </Card.Text>
                        <Button  href='https://arjun-baidya.github.io/panda-ecommerce/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/panda-ecommerce' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./yoga-pro-img.png" />
                        <Card.Body>
                        <Card.Title>Yoga Project</Card.Title>
                        <Card.Text>
                            This is a React based front-end project.
                        </Card.Text>
                        <Button  href='https://traditional-yoga.netlify.app/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/yoga' target='blank' variant="primary">Code</Button>
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
                        <Button  href='https://arjun-baidya.github.io/panda-ecommerce/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/panda-ecommerce' target='blank' variant="primary">Code</Button>
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
                        <Button  href='https://arjun-baidya.github.io/panda-ecommerce/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/panda-ecommerce' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
