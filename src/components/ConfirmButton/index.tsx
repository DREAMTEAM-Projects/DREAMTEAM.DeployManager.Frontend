import { Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Line } from './styles'
import { useConfirmButton } from './hook'

const ConfirmButton: React.FC<any> = ({ title, ...props }) => {
  const { handleConfirm, validate, setConfirm, setValidate } =
    useConfirmButton()
  return (
    <Button
      variant={!validate ? props.variant : 'ghost'}
      {...props}
      onClick={() => {
        if (validate) {
          handleConfirm(props.onClick)
          return
        }
        setValidate(true)
        setConfirm(false)
      }}
    >
      <Line>
        {validate && <AiOutlineInfoCircle />}
        {validate ? 'Clique para confirmar' : title}
      </Line>
    </Button>
  )
}

export { ConfirmButton }
