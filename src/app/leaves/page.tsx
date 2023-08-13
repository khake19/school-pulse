'use client'
import { Box, Heading } from '@chakra-ui/react'

import Layout from '~/components/Layout'
import SingleLeaveCalendar from '~/components/SingleLeaveCalendar/SingleLeaveCalendar'
import LeaveStyle from './Leave.style'

const Leaves = () => {
    return  (<Layout>
        <Box css={LeaveStyle.main}>
            <Box css={LeaveStyle.header}>
            <Heading as="h4" size="md">
                Teachers
            </Heading>
            </Box>
            <Box>
                <SingleLeaveCalendar />
            </Box>
        </Box>
    </Layout>
    )
}

export default Leaves