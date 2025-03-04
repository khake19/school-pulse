import { Box, Center, Flex, Grid, GridItem, IconButton, Text } from '@chakra-ui/react'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: 'red'
}

interface IDropzoneProps {
  onFilesChange?: (files: File[] | undefined) => void
  value: File[]
}

export interface IFileWithPreview extends File {
  preview: string
}

const Dropzone = (props: IDropzoneProps) => {
  const [files, setFiles] = useState<IFileWithPreview[]>(props.value as IFileWithPreview[])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )

      setFiles(filesWithPreview)

      if (props.onFilesChange) {
        props.onFilesChange(filesWithPreview)
      }
    },
    [props]
  )

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    minSize: 0,
    maxSize: 5242880,
    multiple: false
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <Box className="container">
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Image src={`/icons/file-arrow-up.svg`} height={40} width={40} alt="file-arrow-up" />
        <Text color="#000" fontSize={10} pt={3}>
          Drag and Drop file here or Choose file
        </Text>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} fontSize={9} marginTop={2} color="gray.500" h="10">
        <GridItem colSpan={2}>Supported formats: JPG, PNG</GridItem>
        <GridItem colStart={4} colEnd={6} textAlign="right">
          Maximum size: 5 MB
        </GridItem>
      </Grid>

      {files.map((file) => (
        <Box bgColor="gray.100" borderRadius={5} padding={2} position="relative" key={file.lastModified}>
          <Flex>
            <Center mr={2}>
              <Image src="/icons/file.svg" width={18} height={18} alt="icon-file" />
            </Center>
            <Box>
              <Text fontSize={10}>{file.name}</Text>
              <Text fontSize={8} color="gray.500">
                {(file.size / 100000).toFixed(2)} MB
              </Text>
            </Box>
          </Flex>
          <IconButton
            position="absolute"
            top="1"
            right="2"
            size="sm"
            aria-label="Close"
            variant="ghost"
            onClick={() => {
              setFiles((prevFiles) => prevFiles.filter((f) => f !== file))

              URL.revokeObjectURL(file.preview)

              if (props.onFilesChange) {
                props.onFilesChange(undefined)
              }
            }}
          >
            <Image src="/icons/x-circle.svg" width={18} height={18} alt="icon-x-circle" />
          </IconButton>
        </Box>
      ))}
    </Box>
  )
}

export default Dropzone
