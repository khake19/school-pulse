'use client'

import {
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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginSchema>({
    resolver: zodResolver(schema)
  })

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit((d) => console.log(d))}>
            <FormControl id="username" isInvalid={!!errors.username} mb={4}>
              <FormLabel>Username</FormLabel>
              <Input {...register('username')} />
              <FormErrorMessage>
                {!errors.username ? (
                  <FormHelperText>Enter the username you'd like to login.</FormHelperText>
                ) : (
                  <FormErrorMessage>Username is required.</FormErrorMessage>
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
