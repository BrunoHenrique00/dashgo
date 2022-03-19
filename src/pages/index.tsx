import type { NextPage } from 'next'
import { Button, Flex , Stack, Text } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Logo from '../components/Header/Logo'

type SignInFormProps = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

const Home: NextPage = () => {
  const router = useRouter()

  const { register , handleSubmit , formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormProps> = async (values) =>{  
    await new Promise(resolve => setTimeout(resolve , 2000))
    router.push('/users')
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems='center' 
      justifyContent='center'
    >
      <Flex
        as='form'
        width='100%'
        maxWidth={460}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Text>
            Faça login com dados aleatórios e veja como é o <Logo />
          </Text>

          <Input
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          
          <Input
            name='password'
            type='password'
            label='Senha'
            error={errors.password}
            {...register('password')}
          />
          
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg' isLoading={formState.isSubmitting} >Entrar</Button>

      </Flex>
    </Flex>
  )
}

export default Home
