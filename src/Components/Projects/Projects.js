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
                            My projects makes use of vast variety of latest technology tools. My best experience is to create 
                            Web application and ERP system using Python, Django-Rest-Framework, React, Node, Odoo ERP.For the front-end development, I have used React JS and Redux. Backend development is done using Python, Django-Rest-Framework, Node. Also I developed ERP system using Odoo Latest version.
                        </p>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mt-5">
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./ecom.gif" />
                        <Card.Body>
                        <Card.Title>Full e-Commerce Project</Card.Title>
                        <Card.Text>
                            This is full e-commerce project using React JS, Redux, Django Rest Framework.
                            And also made Admin Panel using Django Rest Framework and React JS.
                        </Card.Text>
                        <Button  href='' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='' target='blank' variant="primary">Code</Button>
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
                            Made by pure React JS.
                        </Card.Text>
                        <Button  href='https://traditional-yoga.netlify.app/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/yoga' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./dom-pro-img.png" />
                        <Card.Body>
                        <Card.Title>DOM Project</Card.Title>
                        <Card.Text>
                            This is a JavaScript DOM related Project.
                            Developed by using JavaScript, React.
                        </Card.Text>
                        <Button  href='https://arjun-mac-book-pro-dom.netlify.app/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/mac-book-pro-dom-manipulation' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./poet-pro-img.png" />
                        <Card.Body>
                        <Card.Title>Poet Club</Card.Title>
                        <Card.Text>
                            This is a Javascript DOM related project.Developed by using JavaScript, React.
                        </Card.Text>
                        <Button  href='https://poets-club.netlify.app/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/poets-club' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./search-book-pro-img.png" />
                        <Card.Body>
                        <Card.Title>Book API</Card.Title>
                        <Card.Text>
                            This is a Javascript DOM related project.Developed by using JavaScript and HTML and CSS.
                            Get Data from custom API and use DOM.
                        </Card.Text>
                        <Button  href='https://arjun-book-api.netlify.app/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/book-api' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./football.gif" />
                        <Card.Body>
                        <Card.Title>Football Project</Card.Title>
                        <Card.Text>
                            This is a plain HTML and CSS project.
                            Just for front-end design.
                        </Card.Text>
                        <Button  href='https://arjun-baidya.github.io/responsive-football/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/responsive-football' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./food.gif" />
                        <Card.Body>
                        <Card.Title>Food Network Project</Card.Title>
                        <Card.Text>
                            This is a plain HTML and CSS project.
                            Just for front-end design.
                        </Card.Text>
                        <Button  href='https://arjun-baidya.github.io/food-network/' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/food-network' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./sms-mail-qr.gif" />
                        <Card.Body>
                        <Card.Title>SMS-MAIL-QR sending Project</Card.Title>
                        <Card.Text>
                            This is a Python based project.
                            You can send mail and sms and generate QR code.
                        </Card.Text>
                        <Button  href='' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/Python_sms_message_send' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./blog-django.gif" />
                        <Card.Body>
                        <Card.Title>Blog Website</Card.Title>
                        <Card.Text>
                            This is a Python and Django based project.
                            You can create blog and comment on it.It have login and register functionality.
                            Used Django template engine.
                        </Card.Text>
                        <Button  href='' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/Blog-Website' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./image-scrap.gif" />
                        <Card.Body>
                        <Card.Title>Image Scrapping </Card.Title>
                        <Card.Text>
                            This is a image scrapping project.
                            You can download any github user profile image and saved it in your local machine.
                            Made using Python and BeautifulSoup and django.
                        </Card.Text>
                        <Button  href='' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/Github_Image_scraping' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="card-section">
                        <Card.Img variant="top" src="./dram-kit-pro-img.png" />
                        <Card.Body>
                        <Card.Title>JavaScript Dram-kit </Card.Title>
                        <Card.Text>
                            This is a javascript project.Used audio file to listen and play.
                        </Card.Text>
                        <Button  href='' target='blank' variant="primary">Live</Button>
                        <Button  className='code-btn' href='https://github.com/arjun-baidya/JavaScript_Drum_kit' target='blank' variant="primary">Code</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <p className='pt-5'>All Code and project are in GitHub and have some Private project that code was hide in github. </p>
            </Container>
        </div>
    )
}

export default Projects
