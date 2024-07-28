import { Meta, StoryObj } from '@storybook/react'
import DocumentTable from './DocumentTable'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

type Story = StoryObj<typeof DocumentTable>

const meta: Meta<typeof DocumentTable> = {
  title: 'School Pulse/DocumentTable',
  component: DocumentTable,
  tags: ['autodocs']
}

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`
  }
})

// const documents = [
//   {
//     fileName: 'Social Security System',
//     uploadedBy: 'Kerk Jazul',
//     lastModified: 'June 1, 2024',
//     type: 'docx',
//     size: 1000,
//     email: 'kerk.jazul@gmail.com',
//     avatar: '/images/avatars/dbe1ac11-70b7-4cd3-84f6-7344dca61859/original.jpg?v=63883339267'
//   },
//   {
//     fileName: 'Tin ID',
//     uploadedBy: 'Samantha Jazul',
//     lastModified: 'June 2, 2024',
//     type: 'pdf',
//     size: 2000,
//     email: 'sam.jazul@gmail.com',
//     avatar: '/images/avatars/6405eea0-cfe5-4348-b411-5854ca0b88b2/original.jpg?v=63883352384'
//   },
//   {
//     fileName: 'Passport',
//     uploadedBy: 'Hazel Jazul',
//     lastModified: 'June 4, 2024',
//     type: 'excel',
//     size: 300,
//     email: 'hazel.jazul@gmail.com',
//     avatar: ''
//   }
// ]

export const Base: Story = {
  render: () => (
    <ChakraProvider theme={theme}>
      <DocumentTable handleDelete={() => undefined} />
    </ChakraProvider>
  )
}

export default meta
