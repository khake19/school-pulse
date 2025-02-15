'use client'

import { Button, Flex, Heading, Input, Stack, Image, Fieldset } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import schema, { TLoginSchema } from './schema/login'
import useLogin from './hooks/useLogin'
import { Field } from '~/components/ui/field'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginSchema>({
    resolver: zodResolver(schema)
  })

  const { login } = useLogin()

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack gap={4} w={'full'} maxW={'md'}>
          <Heading fontSize="2xl">Sign in to your accounts</Heading>
          <form onSubmit={handleSubmit((data) => login(data))}>
            <Fieldset.Root size="lg" maxW="md">
              <Field label="Email address" invalid={!!errors.email} errorText="Email is required.">
                <Input {...register('email')} type="email" />
              </Field>
              <Field label="Password" invalid={!!errors.password} errorText="Password is required.">
                <Input {...register('password')} type="password" />
              </Field>
            </Fieldset.Root>
            <Button bg="brand.500" variant="solid" type="submit" mt={4}>
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
