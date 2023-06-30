import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

const ModalComponent: React.FC<{
  title: string
  children: React.ReactNode
  onClose?: () => void
  show?: boolean
  createNewTemplate: () => void
}> = ({ title, children, onClose, show = false, createNewTemplate }) => {
  return (
    <Modal isOpen={show} onClose={() => onClose?.()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button size="sm" colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button onClick={createNewTemplate} size="sm" variant="ghost">
            Criar novo template
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { ModalComponent as Modal }
