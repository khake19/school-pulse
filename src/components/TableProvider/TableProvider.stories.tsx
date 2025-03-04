import type { Meta, StoryObj } from '@storybook/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import Table from './Table'
import TableProvider from './TableProvider'
import { createColumnHelper } from '@tanstack/react-table'
import TablePagination from './TablePagination'

const meta: Meta<typeof Table> = {
  title: 'School Pulse/TableProvider',
  component: Table,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Table>

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10
  }
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => '',
    footer: (info) => info.column.id
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id
  })
]
export const Base: Story = {
  render: () => (
    <ChakraProvider value={defaultSystem}>
      <TableProvider
        defaultData={defaultData}
        pagination={{ offset: 0, page: 1, size: 3, total: 0, pages: 3 }}
        isLoading
      >
        <Table columns={columns} />
        <TablePagination setCurrentPage={() => 0} />
      </TableProvider>
    </ChakraProvider>
  )
}

export const Loading: Story = {}

export const Empty: Story = {}

export const Error: Story = {}
