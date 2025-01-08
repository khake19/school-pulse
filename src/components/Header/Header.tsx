import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Flex, Button } from '@chakra-ui/react'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '~/components/ui/menu'
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
    if (!school?.id && schools.length > 0 && school !== schools[0]) {
      setSchool(schools[0])
      setSelectedSchoolName(schools[0]?.name)
    } else if (school && school.name !== selectedSchoolName) {
      setSelectedSchoolName(school.name)
    }
  }, [school, schools, selectedSchoolName, setSchool])

  const handleClick = (selectedSchool: ISchool) => {
    setSchool(selectedSchool)
    setSelectedSchoolName(selectedSchool.name)
    router.push('/')
  }
  return (
    <Box css={HeaderStyle.header} zIndex={100} color="gray.600">
      <Flex h="60px" alignItems="center" justifyContent="space-between">
        <Box>
          <MenuRoot>
            <MenuTrigger asChild bg="teal.200">
              <Button variant="solid" size="sm" css={HeaderStyle.menuButton}>
                {selectedSchoolName}
              </Button>
            </MenuTrigger>
            <MenuContent>
              {schools.map(({ id, name }) => (
                <MenuItem
                  value="school"
                  key={id}
                  onClick={() => handleClick({ id: id, name: name })}
                  _hover={{ bg: 'teal.200' }}
                  bg={selectedSchoolName === name ? 'teal.200' : ''}
                >
                  {name}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
