import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Switch,
  Tag,
  TagLabel,
  TagCloseButton,
  Spinner
} from '@chakra-ui/react'
import {
  Container,
  CreateButton,
  FormLabel,
  TagsContainer,
  Body,
  Wrapper,
  Line,
  ExpandedLine,
  SpinnerScreen
} from './styles'
import { useDeploy } from './hook'
import { Modal } from 'components/Modal'
import { Templates, CreateTemplate } from 'components/templates'
import { StyledButton } from '../login/styles'
import { EditorComponent } from 'components/editor'
import { Controller } from 'react-hook-form'

const Deploy: React.FC = () => {
  const {
    onSubmit,
    title,
    pbis,
    form: { errors, handleSubmit, register, setValue, control },
    handleAddPbis,
    handleAddTag,
    handleRemovePbis,
    handleRemoveTag,
    toggleModal,
    modalState,
    loading,
    loadingScreen,
    projects,
    tag,
    teams,
    templates,
    message,
    toggleDate,
    tags,
    createNewTemplate,
    setCreateNewTemplate
  } = useDeploy()

  return (
    <Container>
      {loadingScreen && (
        <SpinnerScreen>
          <Spinner
            style={{
              width: '130px',
              height: '130px',
              marginBottom: '35rem'
            }}
            size="lg"
          />
        </SpinnerScreen>
      )}
      <Body>
        <Heading
          mt={10}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="tight"
          color="gray.900"
          textAlign="center"
        >
          {title}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Wrapper rowGap="5rem">
            <Wrapper>
              <FormControl isInvalid={Boolean(errors.author?.name)}>
                <FormLabel htmlFor="titulo">Autor</FormLabel>
                <Input
                  id="autor"
                  type="text"
                  placeholder="Título"
                  {...register('author.name', {
                    required: 'Campo obrigatório'
                  })}
                />
                <FormErrorMessage>
                  {errors.author?.name?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.author?.email)}>
                <FormLabel htmlFor="titulo">E-mail</FormLabel>
                <Input
                  id="autor"
                  type="text"
                  placeholder="E-mail"
                  {...register('author.email', {
                    required: 'Campo obrigatório'
                  })}
                />
                <FormErrorMessage>
                  {errors.author?.email?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.title)}>
                <FormLabel htmlFor="titulo">Título</FormLabel>
                <Input
                  id="titulo"
                  type="text"
                  placeholder="Título"
                  {...register('title', { required: 'Campo obrigatório' })}
                />
                <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.project)}>
                <FormLabel htmlFor="projeto">Projeto</FormLabel>
                <Select
                  id="projeto"
                  placeholder="Projeto"
                  {...register('project', { required: 'Campo obrigatório' })}
                >
                  {projects.map((project, index) => (
                    <option key={index} value={project}>
                      {project}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.project?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.team)}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select
                  id="time"
                  placeholder="Time"
                  {...register('team', { required: 'Campo obrigatório' })}
                >
                  {teams.map((team, index) => (
                    <option key={index} value={team}>
                      {team}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.team?.message}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="pbis">Pbís envolvidos</FormLabel>
                <Line>
                  <Input
                    id="pbis"
                    type="text"
                    placeholder="Ex: #77777"
                    {...register('pbi')}
                  />
                  <CreateButton type="button" onClick={handleAddPbis}>
                    Adicionar
                  </CreateButton>
                </Line>
                <TagsContainer>
                  {pbis.map((pbi, index) => (
                    <Tag
                      size="lg"
                      key={pbi}
                      borderRadius="full"
                      variant="solid"
                      colorScheme="green"
                    >
                      <TagLabel>{pbi}</TagLabel>
                      <TagCloseButton onClick={() => handleRemovePbis(index)} />
                    </Tag>
                  ))}
                </TagsContainer>
                <FormErrorMessage>{errors.pbis?.message}</FormErrorMessage>
              </FormControl>
            </Wrapper>

            <Wrapper>
              <FormControl>
                <FormLabel htmlFor="descricao">Descrição</FormLabel>

                <ExpandedLine>
                  <FormControl>
                    <Controller
                      name="templateUnused"
                      control={control}
                      render={({ field }) => (
                        <Select
                          id="template"
                          placeholder="Template"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e)
                            setValue('message', e.target.value)
                          }}
                        >
                          {templates.map((template, index) => (
                            <option key={index} value={template.template}>
                              {template.title}
                            </option>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <CreateButton onClick={toggleModal}>
                    Exibir templates
                  </CreateButton>
                </ExpandedLine>
                <EditorComponent
                  onChange={(content: string) => setValue('message', content)}
                  value={message}
                  name="describe"
                />
              </FormControl>
            </Wrapper>
            <Wrapper>
              <FormControl>
                <Line>
                  <FormLabel>Agendamento</FormLabel>
                  <Switch id="agendamento" {...register('toggleDate')} />
                </Line>
              </FormControl>

              {toggleDate && (
                <FormControl>
                  <FormLabel htmlFor="dataAgendamento">
                    Data e hora do agendamento
                  </FormLabel>
                  <Input
                    id="dataAgendamento"
                    type="datetime-local"
                    placeholder="Data e hora do agendamento"
                    {...register('date')}
                  />
                </FormControl>
              )}
            </Wrapper>

            <FormControl>
              <FormLabel htmlFor="tag">Tag</FormLabel>
              <Line>
                <Input
                  id="tag"
                  type="text"
                  placeholder="Ex: Incidente, Bug, Feature"
                  {...register('tag')}
                />
                <CreateButton type="button" onClick={handleAddTag}>
                  Adicionar
                </CreateButton>
              </Line>
              <TagsContainer>
                {tags.map((tag, index) => (
                  <Tag
                    size="lg"
                    key={tag}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleRemoveTag(index)} />
                  </Tag>
                ))}
              </TagsContainer>
            </FormControl>

            <StyledButton
              isLoading={loading}
              isDisabled={loading}
              type="submit"
            >
              {toggleDate ? 'Agendar' : 'Salvar'}
            </StyledButton>
          </Wrapper>
        </form>
      </Body>
      <Modal
        createNewTemplate={() => setCreateNewTemplate(true)}
        title="Templates"
        onClose={toggleModal}
        show={modalState}
      >
        {createNewTemplate ? (
          <CreateTemplate onBack={() => setCreateNewTemplate(false)} />
        ) : (
          <Templates />
        )}
      </Modal>
    </Container>
  )
}

export { Deploy }
