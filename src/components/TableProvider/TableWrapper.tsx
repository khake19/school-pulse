import { ReactNode, createContext, useContext, useMemo } from 'react'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TableEmpty from './TableEmpty'

interface ITableDataState<T = unknown> {
  data: T[]
  pagination: IPagination
  isLoading: boolean
}

interface ITableDispatchState {
  onPageChange: (newPage: number) => void
}

export const TableDataContext = createContext<ITableDataState<unknown> | null>(null)

export const TableDispatchContext = createContext<ITableDispatchState | null>(null)

export const useTableDataContext = <T = unknown,>(): ITableDataState<T> => {
  const context = useContext(TableDataContext)
  if (!context) {
    throw new Error('useTableDataContext must be used within a TableProvider')
  }
  return context as ITableDataState<T>
}

export const useTableDispatchContext = () => {
  const context = useContext(TableDispatchContext)
  if (!context) {
    throw new Error('useTableDispatchContext must be used within a TableProvider')
  }
  return context
}

// Provider Component
interface ITableWrapperProps<T = unknown> {
  children: ReactNode
  defaultData: T[]
  pagination?: IPagination
  isLoading: boolean
  onPageChange: (newPage: number) => void
}

const TableWrapper = <T = unknown,>({
  children,
  defaultData = [],
  pagination = { offset: 0, page: 0, size: 0, total: 0, pages: 0 },
  isLoading = false,
  onPageChange
}: ITableWrapperProps<T>) => {
  const dataValue = useMemo(() => ({ data: defaultData, pagination, isLoading }), [defaultData, pagination, isLoading])

  return (
    <TableDataContext.Provider value={dataValue}>
      <TableDispatchContext.Provider value={{ onPageChange }}>
        {(defaultData.length > 0 || isLoading) && children}
        {defaultData.length === 0 && !isLoading && <TableEmpty />}
      </TableDispatchContext.Provider>
    </TableDataContext.Provider>
  )
}

export default TableWrapper
