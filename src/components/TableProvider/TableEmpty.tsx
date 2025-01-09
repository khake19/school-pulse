import React from 'react'
import { EmptyState } from '~/components/ui/empty-state'
import { LuTriangleAlert } from 'react-icons/lu'

const TableEmpty = () => {
  return (
    <EmptyState
      icon={<LuTriangleAlert />}
      title="Your table is empty"
      description="The table is currently empty. Please check back later or try adding some data."
    />
  )
}

export default TableEmpty
