import { Box, Heading, Text } from '@chakra-ui/react'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import TableWrapper from '~/components/TableProvider/TableWrapper'
import Table from '~/components/TableProvider/Table'
import useGetSchoolsTeachers from './hooks/useGetSchoolsSummaries'
import { TSchoolSummariesData } from './types/dashboard'
import TablePagination from '~/components/TableProvider/TablePagination'

const SchoolsSummary = () => {
  const { data, meta, isLoading, setCurrentPage } = useGetSchoolsTeachers()

  const columnHelper = createColumnHelper<TSchoolSummariesData>()

  const defaultColumns: ColumnDef<TSchoolSummariesData, string>[] = [
    columnHelper.display({
      id: 'name',
      cell: (props) => {
        return (
          <Box display="flex" alignItems="center" paddingY={2}>
            <Box>
              <Text fontSize="sm" fontWeight="500">
                {props.row.original.name}
              </Text>
            </Box>
          </Box>
        )
      },
      header: () => 'Name of Schools',
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'count',
      cell: (props) => {
        return (
          <Box display="flex" alignItems="center">
            <Box>
              <Text fontSize="sm" fontWeight="500">
                {props.row.original.teacherCount}
              </Text>
            </Box>
          </Box>
        )
      },
      header: () => 'Number of Teachers',
      footer: (info) => info.column.id
    })
  ]

  return (
    <Box p={8}>
      <Heading size="lg" mb={4} display="flex" alignItems="center" gap={2}>
        Schools Summary
      </Heading>
      <TableWrapper defaultData={data} pagination={meta} isLoading={isLoading} onPageChange={setCurrentPage}>
        <Table columns={defaultColumns} />
        <TablePagination />
      </TableWrapper>
    </Box>
  )
}

export default SchoolsSummary
