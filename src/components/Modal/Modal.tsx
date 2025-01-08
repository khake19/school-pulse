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

interface IBasicModalProps {
  title: string
  children: React.ReactNode
  actions: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const BasicModal = (props: IBasicModalProps) => {
  const { children, title, actions, isOpen, onClose } = props

  return (
    <DialogRoot lazyMount open={isOpen} onOpenChange={onClose}>
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
