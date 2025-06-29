import { useState } from 'react';
import axios from 'axios';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react'

function Header(){
    return (
        <Container>
            <Row>
                <Col>Sanjay S</Col>
                <Col><a href="https://github.com/sanjaydevs">Github</a></Col>
                <Col><a href="https://www.linkedin.com/in/sanjay-s-74551a2ba/">LinkedIn</a></Col>
            </Row>
        </Container>
    )
    

}

export default Header;