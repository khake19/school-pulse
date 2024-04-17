import { createContext, useContext } from 'react'

export type TTabsContextProps = {
  activeTab: number
  onChange: (key: number) => void
}
export const TabsContext = createContext<TTabsContextProps | null>(null)

export const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error(`Tabs components cannot be rendered outside the TabsProvider`)
  }
  return context
}
