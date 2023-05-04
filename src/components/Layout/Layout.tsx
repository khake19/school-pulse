import { Grid, GridItem } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <Grid templateAreas={`"header header" "nav main"`} gridTemplateRows={'80px 1fr'} gridTemplateColumns={'150px 1fr'}>
      <Header />
      <Sidebar />
      <GridItem area={'main'}>{children}</GridItem>
    </Grid>
  )
}

export default Layout
