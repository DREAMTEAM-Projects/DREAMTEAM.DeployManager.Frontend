import React from 'react'
import { Container, Content } from './styles'
import { NavBar } from 'components/Navbar'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <Content>{children}</Content>
    </Container>
  )
}

export default Layout
