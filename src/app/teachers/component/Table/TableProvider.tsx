import { ReactNode, createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'

export const TableContext = createContext<ITableState<any>>({
  data: [],
  pagination: { offset: 0, page: 0, size: 0, total: 0, pages: 0 }
})
export const TableDispatchContext = createContext({})

export const useTableContext = () => {
  return useContext(TableContext)
}

export const useTableDispatchContext = () => {
  return useContext(TableDispatchContext)
}

const ActionKind = {
  getCurrentPage: 'getCurrentPage',
  getData: 'getData'
} as const

interface IDataAction {
  type: typeof ActionKind.getData
  payload: []
}

interface ICurrentPageAction {
  type: typeof ActionKind.getCurrentPage
  payload: number
}

interface IPagination {
  offset: number
  page: number
  size: number
  total: number
  pages: number
}

type ITableAction = IDataAction | ICurrentPageAction

interface ITableState<T> {
  data: T[]
  pagination: IPagination
}

const tableReducer = <T extends object>(draft: ITableState<T>, action: ITableAction) => {
  switch (action.type) {
    case ActionKind.getCurrentPage:
      draft.pagination.page
      break
    case ActionKind.getData:
      draft.data
      break
  }
}

interface ITableProviderProps<T> {
  children: ReactNode
  defaultData: T[]
  pagination?: IPagination
}
const TableProvider = <T extends object>(props: ITableProviderProps<T>) => {
  const { children, defaultData = [], pagination = { offset: 0, page: 0, size: 0, total: 0, pages: 0 } } = props
  const [tableState, dispatch] = useImmerReducer<ITableState<T>, ITableAction>(tableReducer, {
    data: defaultData,
    pagination
  })

  return (
    <TableContext.Provider value={tableState}>
      <TableDispatchContext.Provider value={dispatch}>{children}</TableDispatchContext.Provider>
    </TableContext.Provider>
  )
}

export default TableProvider
