import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle
} from '~/components/ui/dialog'
import React from 'react'
import { Button } from '../ui/button'
import { DialogRootProps } from '@chakra-ui/react'

interface IBasicModalProps extends DialogRootProps {
  title: string
  actions: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const BasicModal = (props: IBasicModalProps) => {
  const { children, title, actions, isOpen, onClose, ...rest } = props

  return (
    <DialogRoot lazyMount open={isOpen} onOpenChange={onClose} {...rest}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        {actions && (
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            {actions}
          </DialogFooter>
        )}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default BasicModal
