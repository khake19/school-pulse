import { ReactNode, createContext, useContext, useReducer } from 'react'

export const TableContext = createContext({})
export const TableDispatchContext = createContext({})

export const useTableContext = () => {
  return useContext(TableContext)
}

export const useTableDispatchContext = () => {
  return useContext(TableDispatchContext)
}

const tableReducer = (table: any, action: any) => {
  switch (action.type) {
    case 'currentPage': {
      return [...table, { currentPage: action.currentPage }]
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const defaultValue: any = []

interface ITableProviderProps {
  children: ReactNode
}
export const TableProvider = (props: ITableProviderProps) => {
  const { children } = props
  const [table, dispatch] = useReducer(tableReducer, defaultValue)

  return (
    <TableContext.Provider value={table}>
      <TableDispatchContext.Provider value={dispatch}>{children}</TableDispatchContext.Provider>
    </TableContext.Provider>
  )
}
