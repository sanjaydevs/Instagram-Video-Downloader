import { useState } from 'react';
import axios from 'axios';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react'

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <span className="navbar-brand">Sanjay</span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span className="navbar-toggler-icon"></span>
</button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/sanjay-s-74551a2ba/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/sanjaydevs" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
    

}

export default Header;