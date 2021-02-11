import React from 'react'
import { Container, Title } from './style'
import Navbar from './Navbar'
import Alert from '../Alert'

interface Props {
  children: React.ReactChild | React.ReactChildren
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <div>
    <Navbar />
    <Alert />
    <Container className="container">
      <Title>{title}</Title>
      {children}
    </Container>
  </div>
)

export default Layout
