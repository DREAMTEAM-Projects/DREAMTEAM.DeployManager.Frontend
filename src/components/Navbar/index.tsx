import { Avatar } from '@chakra-ui/react'
import {
  NavContainer,
  RightSide,
  Title,
  LeftSide,
  NavLink,
  NavMenu,
  LogoutContainer
} from './styles'
import { FaHistory } from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineLogout } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <NavContainer>
      <RightSide>
        <Avatar
          size="sm"
          src={
            'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          }
        />
        <Title>Deploy manager</Title>
      </RightSide>
      <NavMenu>
        <NavLink to="/">
          <FaHistory />
          Histórico
        </NavLink>
        <NavLink to="/deploy">
          <FiPackage />
          Deployment
        </NavLink>
      </NavMenu>
      <LeftSide>
        <LogoutContainer
          onClick={() => {
            navigate('/login')
          }}
        >
          <HiOutlineLogout />
          SAIR
        </LogoutContainer>
        <Avatar size="sm" />
      </LeftSide>
    </NavContainer>
  )
}
