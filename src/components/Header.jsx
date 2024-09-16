import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons/faChartColumn';
import './header.css'
function Header() {
 
  return (
    <>
    <Navbar className="bg-info px-2">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no image found"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
             <span className='headingadmin fw-bolder '>Welcome Admin </span> 
          </Navbar.Brand>
        </Container>
        <Container>
        <Link to={'/chart'}><button className='btn btn-outline-light rounded statusbtn me-3' ><FontAwesomeIcon icon={faChartColumn} className='me-2'/>view status</button></Link>
        <Link to={'/'}><button className='btn btn-outline-light rounded' ><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button></Link>
        
        </Container>
        
      </Navbar>
    </>
  )
}

export default Header