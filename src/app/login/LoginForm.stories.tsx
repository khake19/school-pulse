import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './loginForm'
import Providers from '~/utils/provider'

const meta: Meta<typeof LoginForm> = {
  title: 'School Pulse/Login',
  component: LoginForm,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Base: Story = {
  render: () => (
    <Providers>
      <LoginForm />
    </Providers>
  )
}
