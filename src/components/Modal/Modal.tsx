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

export interface IModalRootProps {
  isOpen: boolean
  onClose: () => void
}
interface IBaseModalProps extends DialogRootProps, IModalRootProps {
  title: string
  actions: React.ReactNode
}

const BaseModal = (props: IBaseModalProps) => {
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

export default BaseModal
