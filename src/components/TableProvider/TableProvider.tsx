import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect } from 'react'
import { useImmerReducer } from 'use-immer'
import { IPagination } from '~/components/Table/types/pagination'

// Contexts
export const TableContext = createContext<ITableState<any>>({
  data: [],
  pagination: { offset: 0, page: 0, size: 0, total: 0, pages: 0 }
})

export const TableDispatchContext = createContext<{
  dispatch: React.Dispatch<any>
}>({ dispatch: () => null })

export const useTableContext = () => useContext(TableContext)
export const useTableDispatchContext = () => useContext(TableDispatchContext)

// Action Types
export const ActionKind = {
  getPagination: 'GET_PAGINATION',
  getData: 'GET_DATA',
  setPage: 'SET_PAGE',
  setData: 'SET_DATA',
  setPagination: 'SET_PAGINATION'
} as const

type TTableAction =
  | { type: typeof ActionKind.getData | typeof ActionKind.getPagination }
  | { type: typeof ActionKind.setData; payload: any[] }
  | { type: typeof ActionKind.setPage; payload: number }
  | { type: typeof ActionKind.setPagination; payload: IPagination }

interface ITableState<T> {
  data: T[]
  pagination: IPagination
}

// Reducer
const tableReducer = <T extends object>(draft: ITableState<T>, action: TTableAction) => {
  console.log('Reducer action:', action)
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
  }
  console.log('Reducer state:', draft)
}

// Provider Component
interface ITableProviderProps<T> {
  children: ReactNode
  defaultData: T[]
  pagination?: IPagination
  setCurrentPage: Dispatch<SetStateAction<number>>
}

const TableProvider = <T extends object>({
  children,
  defaultData = [],
  pagination = { offset: 0, page: 0, size: 0, total: 0, pages: 0 },
  setCurrentPage
}: ITableProviderProps<T>) => {
  const [tableState, dispatch] = useImmerReducer<ITableState<T>, TTableAction>(tableReducer, {
    data: defaultData,
    pagination
  })

  useEffect(() => {
    console.log('Effect: defaultData or pagination changed')
    dispatch({ type: ActionKind.setData, payload: defaultData })
    dispatch({ type: ActionKind.setPagination, payload: pagination })
  }, [defaultData, pagination, dispatch])

  console.log('TableProvider', tableState.pagination.page)

  useEffect(() => {
    console.log('Effect: tableState.pagination.page changed', tableState.pagination.page)
    setCurrentPage(tableState.pagination.page)
  }, [tableState.pagination.page, setCurrentPage])

  return (
    <TableContext.Provider value={tableState}>
      <TableDispatchContext.Provider value={{ dispatch }}>{children}</TableDispatchContext.Provider>
    </TableContext.Provider>
  )
}

export default TableProvider
