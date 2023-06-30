import { styled } from 'styled-components'
import { Card } from '@chakra-ui/react'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`

export const PBIs = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`

export const PBI = styled.div`
  margin-left: 1rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Description = styled.div`
  flex-direction: column;
`

export const ItemTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

export const DescriptionText = styled.div``

export const ExpectedDate = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const ExpectedDateText = styled.div`
  font-size: 1rem;
`

export const CardView = styled(Card)`
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`

export const Author = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`
export const AuthorText = styled.div`
  font-size: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`
