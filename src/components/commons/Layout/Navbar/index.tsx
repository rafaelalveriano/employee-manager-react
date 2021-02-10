import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { LinkStyle } from './style'

const NavbarComponent = () => {
  const location = useLocation()

  const active = (page: string) => (page === location.pathname ? true : false)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Empolyee Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkStyle active={true} to="/">
            Funcionários
          </LinkStyle>
          <LinkStyle to="/">Funcionários</LinkStyle>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
