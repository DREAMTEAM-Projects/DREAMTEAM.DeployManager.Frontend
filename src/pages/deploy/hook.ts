import { ICreateDeployFormValues } from 'interfaces/deploy'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { projects as projectsMock, teams as teamsMock } from 'mocks/deploy'
import api from 'services/api'

const useDeploy = () => {
  const { id } = useParams()
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    reset,
    watch,
    control
  } = useForm<ICreateDeployFormValues>()
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [modalState, setModalState] = useState<boolean>(false)
  const [templates, setTemplates] = useState<
    Array<{ template: string; title: string }>
  >([])
  const [teams, setTeams] = useState<string[]>([])
  const [createNewTemplate, setCreateNewTemplate] = useState(false)
  const [projects, setProjects] = useState<string[]>([])
  const onSubmit = async (data: ICreateDeployFormValues) => {
    console.log(data)
    await handleSaveOrEdit(data)
  }

  const toast = useToast()

  const toggleDate = watch('toggleDate')
  const message = watch('message')
  const pbis = watch('pbis') ?? []
  const tags = watch('tags') ?? []
  const pbi = watch('pbi')
  const tag = watch('tag')

  const toggleModal = () => setModalState((state) => !state)

  const handleAddPbis = () => {
    if (pbis.includes(pbi) || pbi === '') return
    setValue('pbis', [...pbis, pbi])
  }

  const handleAddTag = () => {
    if (tags.includes(tag) || tag === '') return
    setValue('tags', [...tags, tag])
  }

  const handleRemovePbis = (index: number) => {
    const updatedPbis = [...pbis]
    updatedPbis.splice(index, 1)
    setValue('pbis', updatedPbis)
  }

  const handleRemoveTag = (index: number) => {
    const updatedTags = [...tags]
    updatedTags.splice(index, 1)
    setValue('tags', updatedTags)
  }

  const handleGetTemplates = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setTemplates([
        {
          template: '<p>Teste</p>',
          title: 'Template 1'
        }
      ])
    } catch (error) {
      toast({
        title: `Ocorreu um problema ao buscar os templates, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  const handleSaveOrEdit = async (body: ICreateDeployFormValues) => {
    try {
      setLoading(true)
      // const handleRoute = id ? `/deploy/${id}` : '/deploy'
      // const {  } = await api.post(handleRoute, { body })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setLoading(false)
      toast({
        title: `Deploy ${id ? 'editado' : 'salvo'} com sucesso!`,
        position: 'top-right',
        status: 'success'
      })
      if (!id) {
        reset()
      }
    } catch (error) {
      setLoading(false)
      toast({
        title: `Ocorreu um problema ao ${
          id ? 'editar' : 'salvar'
        }, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  const handleGetDeploy = async () => {
    try {
      setLoadingScreen(true)
      toast({
        title: `Carregando dados do deploy...`,
        position: 'top-right',
        status: 'info'
      })
      // const {  } = await api.get(`/route/id`, { body })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setLoadingScreen(false)
      reset({})
    } catch (error) {
      setLoadingScreen(false)
      toast({
        title: `Ocorreu um problema ao buscar os dados do deploy, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  const handleGetTeams = async () => {
    try {
      // const {  } = await api.get('')
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setTeams(teamsMock)
    } catch (error) {
      toast({
        title: `Ocorreu um problema ao buscar os dados dos times, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  const handleGetProjects = async () => {
    try {
      // const {  } = await api.get('')
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setProjects(projectsMock)
    } catch (error) {
      toast({
        title: `Ocorreu um problema ao buscar os dados dos projetos, tente novamente!`,
        position: 'top-right',
        status: 'error'
      })
    }
  }

  useEffect(() => {
    if (id) {
      handleGetDeploy()
    }
    handleGetTeams()
    handleGetTemplates()
    handleGetProjects()
  }, [])

  const title = `${!id ? 'Criar' : 'Editar'} deploy`
  return {
    handleAddPbis,
    onSubmit,
    handleRemoveTag,
    handleRemovePbis,
    handleAddTag,
    toggleDate,
    title,
    tags,
    tag,
    pbis,
    form: { handleSubmit, register, errors, setValue, control },
    modalState,
    toggleModal,
    loading,
    loadingScreen,
    templates,
    teams,
    message,
    projects,
    setCreateNewTemplate,
    createNewTemplate
  }
}
export { useDeploy }
