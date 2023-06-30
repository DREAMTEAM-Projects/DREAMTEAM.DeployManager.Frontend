import { useState, useEffect } from 'react'

const useConfirmButton = () => {
  const [validate, setValidate] = useState(false)
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    if (validate) {
      setTimeout(() => setValidate(false), 3000)
    }
  }, [validate])

  const handleConfirm = (onClick: any) => {
    setConfirm(true)
    setValidate(false)
    onClick?.()
  }

  return { handleConfirm, validate, confirm, setConfirm, setValidate }
}
export { useConfirmButton }
