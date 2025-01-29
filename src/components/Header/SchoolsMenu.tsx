import React from 'react'
import { Box, Button } from '@chakra-ui/react'

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '~/components/ui/menu'
import HeaderStyle from './Header.style'
import useSelectedSchool from '~/app/teachers/hooks/useSelectedSchool'
import useGetSchools from '~/app/schools/hooks/useSchool'

const SchoolsMenu = () => {
  const { schools = [] } = useGetSchools()
  const { handleSelectedSchool, selectedSchool } = useSelectedSchool(schools)
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild bg="teal.200">
          <Button variant="solid" size="sm" css={HeaderStyle.menuButton}>
            {selectedSchool}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {schools.map(({ id, name }) => (
            <MenuItem
              value="school"
              key={id}
              onClick={() => handleSelectedSchool({ id, name })}
              _hover={{ bg: 'teal.200' }}
              bg={selectedSchool === name ? 'teal.200' : ''}
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
