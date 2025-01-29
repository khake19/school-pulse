import { Box, Text } from '@chakra-ui/react'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'

import { LuChevronDown, LuLogOut } from 'react-icons/lu'
import { logout } from '~/app/auth/actions/logout'
import useCurrentUser from '~/app/auth/hooks/useCurrentUser'

const AccountMenu = () => {
  const { currentUser } = useCurrentUser()
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="plain" size="sm">
            <Avatar
              src={currentUser.avatar || undefined}
              boxSize="35px"
              borderRadius="full"
              name={currentUser.firstName + ' ' + currentUser.lastName}
            />{' '}
            <Text>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
            <LuChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="logout" valueText="logout" onClick={() => logout()}>
            <LuLogOut />
            <Box flex="1">Log out</Box>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  )
}

export default AccountMenu
