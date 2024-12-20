import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Flex, Spacer, Button, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import HeaderStyle from './Header.style'
import useCurrentSchool from '~/stores/current-school/useCurrentSchool'
import { ISchool } from '../../app/schools/types/schools'

interface THeaderProps {
  schools?: ISchool[]
}

const Header = (props: THeaderProps) => {
  const { schools = [] } = props
  const [school, setSchool] = useCurrentSchool((state) => [state.school, state.setSchool])
  const [selectedSchoolName, setSelectedSchoolName] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!school?.id) {
      setSchool(schools[0])
      setSelectedSchoolName(schools[0]?.name)
    } else {
      setSelectedSchoolName(school.name)
    }
  }, [school, schools, setSchool])

  const handleClick = (selectedSchool: ISchool) => {
    setSchool(selectedSchool)
    setSelectedSchoolName(selectedSchool.name)
    router.push('/')
  }
  return (
    <Box css={HeaderStyle.header} zIndex={100} color="gray.600">
      <Flex h="60px" alignItems="center" justifyContent="space-between">
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
                  _hover={{ bg: '#87CBB9' }}
                  bg={selectedSchoolName === name ? '#87CBB9' : ''}
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
