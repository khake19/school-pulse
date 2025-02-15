import React, { useMemo } from 'react'
import { Box, Button } from '@chakra-ui/react'

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '~/components/ui/menu'
import HeaderStyle from './Header.style'
import useSelectedSchool from '~/app/teachers/hooks/useSelectedSchool'
import useGetSchools from '~/app/schools/hooks/useSchool'

const SchoolsMenu = () => {
  const { schools = [] } = useGetSchools()
  const { handleSelectedSchool, selectedSchool } = useSelectedSchool(schools)
  const memoizedSchools = useMemo(() => schools, [schools])

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild bg="brand.200">
          <Button variant="solid" size="sm" css={HeaderStyle.menuButton}>
            {selectedSchool}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {memoizedSchools.map(({ id, name }) => (
            <MenuItem
              value="school"
              key={id}
              onClick={() => handleSelectedSchool({ id, name })}
              _hover={{ bg: 'brand.200' }}
              bg={selectedSchool === name ? 'brand.200' : ''}
              minWidth={290}
            >
              {name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}

export default SchoolsMenu
