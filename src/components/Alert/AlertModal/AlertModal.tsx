import React from 'react'
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle
} from '~/components/ui/dialog'

interface IAlertModalProps {
  isOpen: boolean
  onClose: () => void
  label: string
  description: string
  actions: React.ReactNode
}

const AlertModal = (props: IAlertModalProps) => {
  const { isOpen, onClose, label, description, actions } = props

  return (
    <DialogRoot open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <p>{description}</p>
        </DialogBody>
        {actions && <DialogFooter>{actions}</DialogFooter>}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default AlertModal
