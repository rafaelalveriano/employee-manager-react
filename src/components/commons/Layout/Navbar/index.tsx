import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { LinkStyle } from './style'

const NavbarComponent = () => {
  const location = useLocation()

  const active = (page: string) => (page === location.pathname ? 1 : 0)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Employee Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkStyle active={active('/')} to="/">
            Funcionários
          </LinkStyle>
          <LinkStyle active={active('/cargos')} to="/cargos">
            Cargos
          </LinkStyle>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent
