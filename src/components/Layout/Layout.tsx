import { Box, Grid, GridItem } from '@chakra-ui/react'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

const Layout = () => {
  return (
    <Grid templateAreas={`"header header" "nav main"`} gridTemplateRows={'80px 1fr'} gridTemplateColumns={'150px 1fr'}>
      <Header />
      <Sidebar />
      <GridItem area={'main'}>
        <Box>Main</Box>
      </GridItem>
    </Grid>
  )
}

export default Layout
