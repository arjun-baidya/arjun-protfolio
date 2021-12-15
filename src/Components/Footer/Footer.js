import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './footer.css'

function Footer() {
    return (
        <div className="footer-div">
            <Container>
                <Row>
                <div className="footer">
                    <p> &copy; Copyright {new Date().getFullYear() }, All Rights Reserved. Developed by Arjun Baidya </p>
                </div>
            </Row>
            </Container>
        </div>
    )
}

export default Footer
