'use client'

import {
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import schema, { TLoginSchema } from './schema/login'
import useLogin from './hooks/useLogin'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginSchema>({
    resolver: zodResolver(schema)
  })

  const { login, isError } = useLogin()

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          {isError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>Incorrect email or password</AlertDescription>
            </Alert>
          )}
          <Heading fontSize="2xl">Sign in to your accounts</Heading>
          <form onSubmit={handleSubmit((data) => login(data))}>
            <FormControl id="email" isInvalid={!!errors.email} mb={4}>
              <FormLabel>Email</FormLabel>
              <Input {...register('email')} />
              <FormErrorMessage>
                {!errors.email ? (
                  <FormHelperText>Enter the email you'd like to login.</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password} mb={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password')} />
              {errors.password && <FormErrorMessage>Password is required.</FormErrorMessage>}
            </FormControl>
            <Button colorScheme={'teal'} variant={'solid'} type="submit">
              Sign in
            </Button>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default LoginForm
