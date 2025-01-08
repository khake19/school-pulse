import { Input, Box, Text, Heading, Flex } from '@chakra-ui/react'

import { useFormContext } from 'react-hook-form'
import { TTeacherFormInput } from '../types/teachers'
import { useRef, useState } from 'react'
import { Avatar, AvatarProps } from '~/components/ui/avatar'
import { Field } from '~/components/ui/field'

interface IProfileAvatarProps {
  size?: AvatarProps
  name?: string
}
const ProfileAvatar = (props: IProfileAvatarProps) => {
  const { size, name } = props
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
    <Field invalid={!!errors.avatar} errorText="Image is required.">
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap" marginBottom={5}>
        <Avatar
          size={size}
          name={name}
          src={selectedImage ? URL.createObjectURL(selectedImage) : (avatar as string)}
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
    </Field>
  )
}

export default ProfileAvatar
