import { useState } from 'react'
import { ILoginFormValues } from 'interfaces/login'
import { useToast } from '@chakra-ui/react'

const useLogin = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: ILoginFormValues) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    toast({
      title: 'Login efetuado com sucesso!',
      position: 'top-right',
      isClosable: true,
      status: 'success'
    })
    setIsLoading(false)
  }
  return { isLoading, onSubmit }
}
export { useLogin }
