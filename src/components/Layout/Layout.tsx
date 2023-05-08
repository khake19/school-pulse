import { Flex } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Flex direction="column" align="stretch" justify="flex-start">
      <Header />
      <Flex direction="row" align="stretch" justify="flex-start" flex="1" bg="#F9F9F9">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
