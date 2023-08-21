"use client"
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  `

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
`

const HeaderProfile = styled.div`
  background: black;
  border-radius: 40;
  `

// nav style component
const Nav = styled.nav`
  display: flex
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>ytakahashi profile</HeaderTitle>
      <Nav>
        <ul>About</ul>
        <ul>Skill</ul>
        <ul>Blog</ul>
        <ul>Contact</ul>
      </Nav>
      </HeaderContainer>
  )
}

export default Header