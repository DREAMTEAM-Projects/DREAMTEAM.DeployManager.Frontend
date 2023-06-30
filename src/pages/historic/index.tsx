import { Table, Thead, Th, Tr, Tbody, Td, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Header,
  Title,
  ContainerTable,
  Options,
  SeeMore,
  ButtonsContainer
} from './styles'
import { mockTableData } from 'mocks/data'
import { EHistoricHeader } from 'constants/historic'
import React from 'react'
import { StatusBadge } from 'components/Badges/StatusBadge'
import { SingleTagBadge } from 'components/Badges/TagBadge'

export const Historic = () => {
  const navigate = useNavigate()

  const header = [
    {
      label: 'Projeto',
      key: EHistoricHeader.project
    },
    {
      label: 'Time',
      key: EHistoricHeader.team
    },
    {
      label: 'Titúlo',
      key: EHistoricHeader.title
    },
    {
      label: 'Tags',
      key: EHistoricHeader.tags
    },
    {
      label: 'Autor',
      key: EHistoricHeader.author
    },
    {
      label: 'Status',
      key: EHistoricHeader.status
    },
    {
      label: 'Data',
      key: EHistoricHeader.date
    },
    {
      label: 'Ações',
      key: EHistoricHeader.actions
    }
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const mockRecieveTableData = React.useMemo(() => {
    return mockTableData
      ? mockTableData.map((data) => {
          return {
            [EHistoricHeader.project]: data.project ?? ' - ',
            [EHistoricHeader.team]: data.team ?? ' - ',
            [EHistoricHeader.title]: data.title ?? ' - ',
            [EHistoricHeader.tags]:
              <SingleTagBadge label={data.tags} /> ?? ' - ',
            [EHistoricHeader.author]: data.author ?? ' - ',
            [EHistoricHeader.status]: <StatusBadge id={data.status} /> ?? ' - ',
            [EHistoricHeader.date]: data.date ?? ' - ',
            [EHistoricHeader.actions]: (
              <ButtonsContainer>
                <Options
                  size={'sm'}
                  onClick={() => {
                    navigate(`/deploy/${data.id}`)
                  }}
                >
                  Editar
                </Options>
                <SeeMore
                  size={'sm'}
                  colorScheme="messenger"
                  onClick={() => {
                    navigate(`/historic/${data.id}`)
                  }}
                >
                  Ver mais
                </SeeMore>
              </ButtonsContainer>
            )
          }
        })
      : []
  }, [navigate])

  return (
    <Container>
      <ContainerTable>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th colSpan={header.length}>
                <Header>
                  <Title>Histórico</Title>
                  <Button
                    colorScheme="messenger"
                    size={'sm'}
                    onClick={() => {
                      navigate('/deploy')
                    }}
                  >
                    + Novo Deploy
                  </Button>
                </Header>
              </Th>
            </Tr>
            <Tr>
              {header.map((item, index) => (
                <Th key={index} textAlign="center">
                  {item.label}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {mockRecieveTableData.map((row, rowIndex) => (
              <Tr key={rowIndex} cursor={'pointer'}>
                {header.map((item, itemIndex) => (
                  <Td key={itemIndex} textAlign="center">
                    {row[item.key]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContainerTable>
    </Container>
  )
}
