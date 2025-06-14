import { Dispatch, ReactNode, createContext, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TableEmpty from './TableEmpty'

// Action Types
export const ActionKind = {
  getPagination: 'GET_PAGINATION',
  getData: 'GET_DATA',
  setData: 'SET_DATA',
  setPage: 'SET_PAGE',
  setPagination: 'SET_PAGINATION',
  setLoading: 'SET_LOADING'
} as const

type TTableAction<T = unknown> =
  | { type: typeof ActionKind.getData | typeof ActionKind.getPagination }
  | { type: typeof ActionKind.setData; payload: T[] }
  | { type: typeof ActionKind.setPage; payload: number }
  | { type: typeof ActionKind.setPagination; payload: IPagination }
  | { type: typeof ActionKind.setLoading; payload: boolean }

interface ITableState<T = unknown> {
  data: T[]
  pagination: IPagination
  isLoading?: boolean
}

export const TableContext = createContext<ITableState<unknown> | null>(null)

export const TableDispatchContext = createContext<{
  dispatch: Dispatch<TTableAction<unknown>>
} | null>(null)

// Custom hooks for consuming contexts with proper type safety
export const useTableContext = <T = unknown,>(): ITableState<T> => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider')
  }
  return context as ITableState<T>
}

export const useTableDispatchContext = <T = unknown,>() => {
  const context = useContext(TableDispatchContext)
  if (!context) {
    throw new Error('useTableDispatchContext must be used within a TableProvider')
  }
  return context as { dispatch: Dispatch<TTableAction<T>> }
}

const tableReducer = (draft: ITableState<unknown>, action: TTableAction<unknown>) => {
  switch (action.type) {
    case ActionKind.setPage:
      draft.pagination.page = action.payload
      break
    case ActionKind.setData:
      draft.data = action.payload
      break
    case ActionKind.setPagination:
      draft.pagination = action.payload
      break
    case ActionKind.setLoading:
      draft.isLoading = action.payload
      break
  }
}

// Provider Component
interface ITableProviderProps<T = unknown> {
  children: ReactNode
  defaultData: T[]
  pagination?: IPagination
  isLoading: boolean
}

const TableProvider = <T = unknown,>({
  children,
  defaultData = [],
  pagination = { offset: 0, page: 0, size: 0, total: 0, pages: 0 },
  isLoading = false
}: ITableProviderProps<T>) => {
  const [tableState, dispatch] = useImmerReducer(tableReducer, {
    data: defaultData,
    pagination,
    isLoading
  })

  useEffect(() => {
    dispatch({ type: ActionKind.setData, payload: defaultData })
  }, [defaultData, dispatch])

  useEffect(() => {
    dispatch({ type: ActionKind.setPagination, payload: pagination })
  }, [pagination, dispatch])

  useEffect(() => {
    dispatch({ type: ActionKind.setLoading, payload: isLoading })
  }, [isLoading, dispatch])

  return (
    <TableContext.Provider value={tableState}>
      <TableDispatchContext.Provider value={{ dispatch }}>
        {(tableState.data.length > 0 || isLoading) && children}
        {tableState.data.length === 0 && !isLoading && <TableEmpty />}
      </TableDispatchContext.Provider>
    </TableContext.Provider>
  )
}

export default TableProvider
