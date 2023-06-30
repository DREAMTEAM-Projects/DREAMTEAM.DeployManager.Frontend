import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  FormErrorMessage,
  FormLabel,
  useToast,
  Input,
  FormControl,
  Spinner
} from '@chakra-ui/react'
import api from 'services/api'

import { useState, useEffect } from 'react'
import { Footer } from './styles'
import { ConfirmButton } from '../ConfirmButton'
import { useForm } from 'react-hook-form'
import { EditorComponent } from 'components/editor'

const Templates: React.FC = () => {
  const [dataResponse, setDataResponse] = useState<
    Array<{ title: string; template: string }>
  >([])
  const [saveLoading, setSaveLoading] = useState(false)
  const [errorLoading, setErrorLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setValue, watch, handleSubmit } = useForm<{
    describe: Array<{ item: string }>
  }>()

  const toast = useToast()

  const onSubmit = async (data: { describe: Array<{ item: string }> }) => {
    try {
      // await api.patch(`/template/`, {
      //   body: {
      //     message: data?.describe?.[0]?.item,
      //     authorId: '12309-123412-141-1233',
      //     author: {
      //       id: '12309-123412-141-1233',
      //       email: 'lucas@mail.com',
      //       name: 'Lucas',
      //       externalId: '123098-123487-1231-12341'
      //     }
      //   }
      // })
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log('data: ', data)
      setSaveLoading(false)
      setErrorLoading(false)
      toast({
        title: `Template editado com sucesso!`,
        position: 'top-right',
        status: 'success'
      })
    } catch (error) {
      toast({
        title: `Ocorreu um problema ao editar o template, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  const handleGetTemplates = async () => {
    try {
      setLoading(true)
      // const { data } = await api.delete(`/template/12309-123412-141-1233`)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setDataResponse([
        {
          title: 'Template 1',
          template: '<b><p>Template teste</p></b>'
        }
      ])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast({
        title: `Ocorreu um problema ao buscar os templates, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  useEffect(() => {
    handleGetTemplates()
  }, [])

  const handleDelete = async (templateId: number) => {
    try {
      // await api.delete(`/template/${templateId}`)
      setErrorLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setErrorLoading(false)
      toast({
        title: `Template deletado com sucesso!`,
        position: 'top-right',
        status: 'success'
      })
      await handleGetTemplates()
    } catch (error) {
      toast({
        title: `Ocorreu um problema ao excluir o template, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  return (
    <Accordion allowToggle>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        dataResponse.map((template, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {template.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <EditorComponent
                  onChange={(content: string) =>
                    setValue(`describe.${index}.item`, content)
                  }
                  value={watch(`describe.${index}.item`) || template.template}
                  name="describe"
                />

                <Footer>
                  <ConfirmButton
                    type="submit"
                    isLoading={saveLoading}
                    isDisabled={saveLoading}
                    onClick={() => {
                      setSaveLoading(true)
                    }}
                    title="Salvar"
                    size="sm"
                    colorScheme="blue"
                  />
                  <ConfirmButton
                    title="Excluir"
                    isLoading={errorLoading}
                    isDisabled={errorLoading}
                    onClick={async () => {
                      await handleDelete(2)
                    }}
                    variant="ghost"
                    size="sm"
                    colorScheme="blue"
                  />
                </Footer>
              </form>
            </AccordionPanel>
          </AccordionItem>
        ))
      )}
    </Accordion>
  )
}

const CreateTemplate: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{
    title: string
    message: string
  }>()
  const toast = useToast()

  const onSubmit = async (data: { title: string; message: string }) => {
    try {
      setLoading(true)
      // await api.post('/template', {
      //   body: {
      //     message: data.message,
      //     authorId: '12309-123412-141-1233',
      //     author: {
      //       id: '12309-123412-141-1233',
      //       email: 'lucas@mail.com',
      //       name: 'Lucas',
      //       externalId: '123098-123487-1231-12341'
      //     }
      //   }
      // })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setLoading(false)
      toast({
        title: `Template criado com sucesso!`,
        position: 'top-right',
        status: 'success'
      })
      onBack?.()
    } catch (error) {
      setLoading(false)
      toast({
        title: `Ocorreu um problema ao criar o template, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.title)}>
        <FormLabel htmlFor="titulo">Autor</FormLabel>
        <Input
          id="autor"
          type="text"
          placeholder="Título"
          {...register('title', {
            required: 'Campo obrigatório'
          })}
        />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.message)}>
        <FormLabel htmlFor="titulo">Autor</FormLabel>
        <EditorComponent
          onChange={(content: string) => setValue(`message`, content)}
          value={watch(`message`)}
          name="describe"
        />
        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
      </FormControl>
      <Footer>
        <Button
          type="submit"
          isLoading={loading}
          isDisabled={loading}
          title="Salvar"
          size="sm"
          colorScheme="blue"
        >
          Salvar
        </Button>
        <Button
          onClick={onBack}
          title="Voltar"
          variant="ghost"
          size="sm"
          colorScheme="blue"
        >
          Voltar
        </Button>
      </Footer>
    </form>
  )
}

export { Templates, CreateTemplate }
