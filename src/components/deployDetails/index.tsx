import {
  Container,
  Header,
  TagsContainer,
  Title,
  ExpectedDate,
  PBIs,
  PBI,
  Description,
  DescriptionText,
  ItemTitle,
  CardView,
  ExpectedDateText,
  Content,
  ButtonsContainer,
  AuthorText,
  Author
} from './styles'
import { mockTableData } from 'mocks/data'
import React from 'react'
import { EHistoricHeader } from 'constants/historic'
import { TagsBadge } from 'components/Badges/TagBadge'
import { CardBody, Button, useToast } from '@chakra-ui/react'
import { ConfirmButton } from 'components/ConfirmButton'
import { useNavigate, useParams } from 'react-router-dom'

export const DeployDetails = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { id } = useParams()

  const mockRecieveData = React.useMemo(() => {
    return mockTableData
      ? mockTableData.map((data) => {
          return {
            [EHistoricHeader.tags]: <TagsBadge label={data.tags} /> ?? ' - '
          }
        })
      : []
  }, [])

  const handleButtonClick = () => {
    navigate(-1)
    toast({
      title: 'Sucesso.',
      description: 'Mensagem de deploy enviada com sucesso.',
      position: 'top-right',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  const targetData = mockTableData?.find((item) => item.id === Number(id))

  return (
    <Container>
      <Content>
        <Header>
          <Title>{targetData?.title}</Title>
          <TagsContainer>
            {mockRecieveData.map((data, index) => (
              <div key={index}>{data[EHistoricHeader.tags]}</div>
            ))}
          </TagsContainer>
        </Header>
        <CardView>
          <CardBody>
            <PBIs>
              <ItemTitle>PBIs envolvidas:</ItemTitle>
              {targetData?.pbis.map((pbi, index) => (
                <PBI key={index}>{pbi}</PBI>
              ))}
            </PBIs>
            <Description>
              <ItemTitle>Descrição:</ItemTitle>
              <DescriptionText>{targetData?.description}</DescriptionText>
            </Description>
            <Author>
              <ItemTitle>Autor:</ItemTitle>{' '}
              <AuthorText>{targetData?.author}</AuthorText>
            </Author>
            <ExpectedDate>
              <ItemTitle>Expected date:</ItemTitle>{' '}
              <ExpectedDateText>{targetData?.date}</ExpectedDateText>
            </ExpectedDate>
          </CardBody>
        </CardView>
      </Content>
      <ButtonsContainer>
        <Button colorScheme="blue" variant="ghost" onClick={() => navigate(-1)}>
          Voltar
        </Button>
        <ConfirmButton
          title={'Enviar'}
          colorScheme="blue"
          onClick={handleButtonClick}
        />
      </ButtonsContainer>
    </Container>
  )
}
