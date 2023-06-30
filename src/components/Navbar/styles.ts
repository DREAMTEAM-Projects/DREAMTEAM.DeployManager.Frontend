import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  border-radius: 8px;
`

export const RightSide = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Title = styled.h1`
  color: var(--light-theme-heading-text, #151924);
  font-size: 18px;
  font-weight: 500;
`
export const NavMenu = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  height: 100%;
`

export const NavLink = styled(Link)`
  color: var(--chakra-colors-gray-700);
  display: flex;
  border-radius: 8px;
  font-size: 14px;
  gap: 8px;
  padding: 0.4rem 1rem;
  align-self: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    background: #0066c5;
    color: #fff;
  }
`
export const LogoutContainer = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #5c6bc0;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  background: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`
