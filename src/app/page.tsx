'use client'
import { Box } from '@chakra-ui/react'
import Layout from '~/components/Layout'
import AdminDashboard from './dashboard/AdminDashboard'

import useCurrentUser from './auth/hooks/useCurrentUser'
import { Role } from '~/constant/role'
import SchoolsSummary from './dashboard/SchoolSummaries'

export default function Page() {
  const { currentUser } = useCurrentUser()

  return (
    <Layout>
      <Box width="100%">
        <AdminDashboard />
        <SchoolsSummary />
      </Box>
    </Layout>
  )
}
