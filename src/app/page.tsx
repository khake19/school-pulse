'use client'
import { Box } from '@chakra-ui/react'

import Layout from '~/components/Layout'
import AdminDashboard from './dashboard/AdminDashboard'
import SchoolsSummary from './dashboard/SchoolSummaries'

export default function Page() {
  return (
    <Layout>
      <Box width="100%">
        <AdminDashboard />
        <SchoolsSummary />
      </Box>
    </Layout>
  )
}
