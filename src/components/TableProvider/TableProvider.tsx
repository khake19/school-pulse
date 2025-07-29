import { Dispatch, ReactNode, createContext, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import { IPagination } from '~/components/TableProvider/types/pagination'
import TableEmpty from './TableEmpty'

// Action Types
export const ActionKind = {
  toggleRow: 'TOGGLE_ROW'
} as const

type TTableAction<T = unknown> = { type: typeof ActionKind.toggleRow; payload: boolean }

interface ITableDataState<T = unknown> {
  data: T[]
  pagination: IPagination
  isLoading: boolean
}

interface ITableReducerState<T> {
  isToggled: boolean
}

export const TableReducerContext = createContext<ITableReducerState<unknown> | null>(null)
export const TableDataContext = createContext<ITableDataState<unknown> | null>(null)

export const TableDispatchContext = createContext<{
  dispatch: Dispatch<TTableAction<unknown>>
} | null>(null)

// Custom hooks for consuming contexts with proper type safety
export const useTableReducerContext = <T = unknown,>(): ITableReducerState<T> => {
  const context = useContext(TableReducerContext)
  if (!context) {
    throw new Error('useTableReducerContext must be used within a TableProvider')
  }
  return context as ITableReducerState<T>
}

export const useTableDataContext = <T = unknown,>(): ITableDataState<T> => {
  const context = useContext(TableDataContext)
  if (!context) {
    throw new Error('useTableDataContext must be used within a TableProvider')
  }
  return context as ITableDataState<T>
}

export const useTableDispatchContext = <T = unknown,>() => {
  const context = useContext(TableDispatchContext)
  if (!context) {
    throw new Error('useTableDispatchContext must be used within a TableProvider')
  }
  return context as { dispatch: Dispatch<TTableAction<T>> }
}

const tableReducer = (draft: ITableReducerState<unknown>, action: TTableAction<unknown>) => {
  switch (action.type) {
    case ActionKind.toggleRow:
      draft.isToggled = action.payload
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
  const [tableReducerState, dispatch] = useImmerReducer(tableReducer, { isToggled: false })

  return (
    <TableDataContext.Provider value={{ data: defaultData, pagination, isLoading }}>
      <TableReducerContext.Provider value={tableReducerState}>
        <TableDispatchContext.Provider value={{ dispatch }}>
          {(defaultData.length > 0 || isLoading) && children}
          {defaultData.length === 0 && !isLoading && <TableEmpty />}
        </TableDispatchContext.Provider>
      </TableReducerContext.Provider>
    </TableDataContext.Provider>
  )
}

export default TableProvider
