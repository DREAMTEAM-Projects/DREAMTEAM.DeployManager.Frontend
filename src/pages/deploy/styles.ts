import { Button } from '@chakra-ui/react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
`

const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
`

const CreateButton = styled(Button)<{ marginTop?: string }>`
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #fff !important;
  font-size: 15px !important;
  font-weight: normal !important;
  margin: 0 !important;
  margin-top: ${({ marginTop }) => `${marginTop} !important`};
  border: 1px solid #cfd3d4 !important;
  border-radius: 8px;
  color: #767676 !important;
  transition: all ease 0.2s !important;

  &:hover {
    filter: brightness(95%);
  }
`

const SpinnerScreen = styled.div`
  position: absolute;
  background: rgba(205, 205, 205, 0.3);
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% + 10rem);
`

const ExpandedLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  column-gap: 14px;
`

const Line = styled.div`
  display: flex;
  column-gap: 8px;

  flex: 1;

  @media (max-width: 770px) {
    flex-wrap: wrap;
    row-gap: 14px;
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
`

const Wrapper = styled.div<{ rowGap?: string }>`
  display: flex;
  flex: 1;
  row-gap: ${({ rowGap }) => (!rowGap ? '3rem' : rowGap)};
  flex-direction: column;
`

const TagsContainer = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 0.8rem;
`

export {
  Container,
  CreateButton,
  FormLabel,
  TagsContainer,
  Body,
  Wrapper,
  Line,
  ExpandedLine,
  SpinnerScreen
}
