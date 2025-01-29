import { Dispatch, ReactNode, createContext, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TableEmpty from './TableEmpty'

// Contexts
export const TableContext = createContext<ITableState<any>>({
  data: [],
  pagination: { offset: 0, page: 0, size: 0, total: 0, pages: 0 }
})

export const TableDispatchContext = createContext<{
  dispatch: Dispatch<any>
}>({ dispatch: () => null })

export const useTableContext = () => useContext(TableContext)
export const useTableDispatchContext = () => useContext(TableDispatchContext)

// Action Types
export const ActionKind = {
  getPagination: 'GET_PAGINATION',
  getData: 'GET_DATA',
  setData: 'SET_DATA',
  setPage: 'SET_PAGE',
  setPagination: 'SET_PAGINATION',
  setLoading: 'SET_LOADING'
} as const

type TTableAction =
  | { type: typeof ActionKind.getData | typeof ActionKind.getPagination }
  | { type: typeof ActionKind.setData; payload: any[] }
  | { type: typeof ActionKind.setPage; payload: number }
  | { type: typeof ActionKind.setPagination; payload: IPagination }
  | { type: typeof ActionKind.setLoading; payload: boolean }

interface ITableState<T> {
  data: T[]
  pagination: IPagination
  isLoading?: boolean
}

const tableReducer = <T extends object>(draft: ITableState<T>, action: TTableAction) => {
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
interface ITableProviderProps<T> {
  children: ReactNode
  defaultData: T[]
  pagination?: IPagination
  isLoading: boolean
}

const TableProvider = <T extends object>({
  children,
  defaultData = [],
  pagination = { offset: 0, page: 0, size: 0, total: 0, pages: 0 },
  isLoading = false
}: ITableProviderProps<T>) => {
  const [tableState, dispatch] = useImmerReducer<ITableState<T>, TTableAction>(tableReducer, {
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
