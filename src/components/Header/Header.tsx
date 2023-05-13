import React, { useEffect, useState } from 'react'
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import HeaderStyle from './Header.style'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'

type School = { id: string; name: string }
type Schools = { schools: School[] }

const Header = ({ schools }: Schools) => {
  const [school, setSchool] = useCurrentSchool((state) => [state.school, state.setSchool])
  const [selectedSchoolName, setSelectedSchoolName] = useState('')

  useEffect(() => {
    if (!school.id) {
      setSchool(schools[0])
      setSelectedSchoolName(schools[0].name)
    } else {
      setSelectedSchoolName(school.name)
    }
  }, [])

  const handleClick = (selectedSchool: School) => {
    setSchool(selectedSchool)
    setSelectedSchoolName(selectedSchool.name)
  }
  return (
    <Box css={HeaderStyle.header} zIndex={100} color="gray.600">
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              css={HeaderStyle.menuButton}
              bg="#B9EDDD"
              _hover={{ bg: '#87CBB9' }}
              _active={{ bg: '#87CBB9' }}
              data-testid="school-menu"
            >
              <Flex direction="row">
                <Text marginRight="12px" fontSize="md" fontWeight="500">
                  {selectedSchoolName}
                </Text>
                <Spacer />
                <TriangleDownIcon />
              </Flex>
            </MenuButton>
            <MenuList width="300px">
              {schools.map(({ id, name }) => (
                <MenuItem
                  key={id}
                  minH="48px"
                  _focus={{ bg: '#87CBB9' }}
                  onClick={() => handleClick({ id: id, name: name })}
                >
                  <Text>{name}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
