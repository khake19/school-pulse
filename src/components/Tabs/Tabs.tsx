import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { TabsContext, useTabsContext } from './hooks/useTabsContext'

type TTabsProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Tabs = ({ children }: TTabsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const onChange = (tabKey: number) => setActiveTab(tabKey)

  const value = { activeTab, onChange }
  return (
    <TabsContext.Provider value={value}>
      <Box>{children}</Box>
    </TabsContext.Provider>
  )
}

const TabList = ({ children }: TTabsProps) => {
  const { onChange } = useTabsContext()
  const tabList = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null
    }
    return React.cloneElement(child as React.ReactElement, {
      onClick: () => onChange(index)
    })
  })
  return <div className="tab-list">{tabList}</div>
}

const Tab = ({ children, onClick }: TTabsProps) => {
  return (
    <div className="tab" onClick={onClick}>
      {children}
    </div>
  )
}

const TabPanels = ({ children }: TTabsProps) => {
  const { activeTab } = useTabsContext()
  const tabPanels = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null
    }
    return activeTab === index ? child : null
  })
  return <div className="tab-panels">{tabPanels}</div>
}

const Panel = ({ children }: TTabsProps) => {
  return <div className="tab-panel">{children}</div>
}
Tabs.TabList = TabList
Tabs.Tab = Tab
Tabs.TabPanels = TabPanels
Tabs.Panel = Panel

export default Tabs
