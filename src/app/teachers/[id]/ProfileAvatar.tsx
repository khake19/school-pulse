import { FormControl, Input, Box, Text, Avatar, Heading, Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'
import { useRef, useState } from 'react'

const ProfileAvatar = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext<TTeacherFormInput>()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined)
  const { ref, ...rest } = register('avatar')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
      setValue('avatar', e.target.files[0])
    }
  }

  const handleClick = () => {
    fileInputRef?.current?.click()
  }
  const avatar = getValues('avatar')

  return (
    <FormControl id="avatar" isInvalid={!!errors.avatar} mb={4}>
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" marginBottom={5}>
        <Avatar
          size="xl"
          name="Segun Adebayo"
          src={selectedImage ? URL.createObjectURL(selectedImage) : process.env.SERVER_URL + avatar}
          onClick={handleClick}
        />
        <Box>
          <Heading size="sm">Profile Picture</Heading>
          <Text fontSize="xs" mb={2}>
            PNG, JPG to 5mb
          </Text>
          <Text fontSize="xs" onClick={handleClick} color="teal">
            Change
          </Text>
          <Input
            {...rest}
            type="file"
            name="avatar"
            ref={(e) => {
              ref(e)
              fileInputRef.current = e
            }}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </Box>
      </Flex>
    </FormControl>
  )
}

export default ProfileAvatar
