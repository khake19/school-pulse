import { Flex } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const schools = [
    { id: '1', name: 'Aroroy East Central School' },
    { id: '2', name: 'Balawing Elementary School' },
    { id: '3', name: 'Balete Elementary School' },
    { id: '4', name: 'Bienvinido R. Bulalacao Memorial Elementary School' },
    { id: '5', name: 'Cabangcalan Elementary School' },
    { id: '6', name: 'Capsay Elementary School' },
    { id: '7', name: 'Concepcion Elementary School' },
    { id: '8', name: 'Lanang Elementary School' },
    { id: '9', name: 'Luy-a Elementary School' },
    { id: '10', name: 'Malubi Elementary School' },
    { id: '11', name: 'Managanaga Elementary School' }
  ]
  return (
    <Flex direction="column" align="stretch" justify="flex-start">
      <Header schools={schools} />
      <Flex direction="row" align="stretch" justify="flex-start" flex="1" bg="#F9F9F9">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
