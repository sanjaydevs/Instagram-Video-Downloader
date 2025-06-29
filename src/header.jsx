import { useState } from 'react';
import axios from 'axios';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react'

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <span className="navbar-brand">Sanjay S</span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
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