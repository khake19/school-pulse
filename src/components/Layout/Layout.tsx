import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import Header from '~/components/Header'

const Layout = () => {
  return (
    <Grid templateAreas={`"header header" "nav main"`} gridTemplateRows={'80px 1fr'} gridTemplateColumns={'150px 1fr'}>
      <Header />
      <GridItem bg="purple.50" area={'nav'} height="calc(100vh - 75px)">
        <Box>Nav</Box>
      </GridItem>
      <GridItem area={'main'}>
        <Box>Main</Box>
      </GridItem>
    </Grid>
  )
}

export default Layout
