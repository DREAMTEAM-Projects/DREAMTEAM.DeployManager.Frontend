import { styled } from 'styled-components'
import { TableContainer, Button } from '@chakra-ui/react'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerTable = styled(TableContainer)`
  border-radius: 8px;
  border: 1px solid #eaecf0;
  background: #fff;
`

export const Options = styled(Button)`
  cursor: pointer;
`

export const SeeMore = styled(Button)`
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`
