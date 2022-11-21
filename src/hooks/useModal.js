import { useState } from 'react'

const useModal = ({ title = '' }) => {
  const [open, setOpen] = useState(false)

  const handleModal = () => {
    setOpen(last => !last)
  }

  return {
    open,
    title,
    handleModal
  }
}

export default useModal
