import React from 'react'
import { Heading, FormErrorMessage, FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import {
  Container,
  FormWrapper,
  LogoWrapper,
  StyledButton,
  StyledInput,
  StyledLabel
} from './styles'
import { ILoginFormValues } from 'interfaces/login'
import { useLogin } from './hook'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ILoginFormValues>()
  const navigate = useNavigate()
  const { isLoading, onSubmit } = useLogin()

  const handleFormSubmit = async (data: ILoginFormValues) => {
    await onSubmit(data)
    navigate('/')
  }

  return (
    <Container>
      <LogoWrapper>
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Deploy manager"
        />
      </LogoWrapper>
      <Heading
        mt={10}
        fontSize="2xl"
        fontWeight="bold"
        lineHeight="tight"
        color="gray.900"
        textAlign="center"
      >
        Faça login em sua conta
      </Heading>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <FormWrapper>
            <FormControl isInvalid={Boolean(errors.email)}>
              <StyledLabel htmlFor="email">E-mail</StyledLabel>
              <StyledInput
                id="email"
                type="email"
                placeholder="Insira seu e-mail"
                {...register('email', { required: 'Campo obrigatório' })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
          </FormWrapper>

          <FormWrapper>
            <FormControl isInvalid={Boolean(errors.password)}>
              <StyledLabel htmlFor="password">Senha</StyledLabel>
              <StyledInput
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Insira sua senha"
                {...register('password', {
                  required: 'Campo obrigatório'
                })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </FormWrapper>

          <StyledButton
            type="submit"
            justifyContent="center"
            rounded="md"
            marginTop="10"
            isLoading={isLoading}
            isDisabled={isLoading}
          >
            Entrar
          </StyledButton>
        </form>
      </FormWrapper>
    </Container>
  )
}

export { Login }
