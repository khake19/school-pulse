import type { Meta, StoryObj } from '@storybook/react'
import Providers from '~/utils/provider'

import TeacherFormModal from './TeacherFormModal'

const meta: Meta<typeof TeacherFormModal> = {
  title: 'School Pulse/Teacher/TeacherFormModal',
  component: TeacherFormModal,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TeacherFormModal>

export const Base: Story = {
  render: () => (
    <Providers>
      <TeacherFormModal isOpen={true} onClose={() => undefined}/>
    </Providers>
  )
}
