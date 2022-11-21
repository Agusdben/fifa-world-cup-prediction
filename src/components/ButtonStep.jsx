import Button from '../Containers/Button'

const ButtonNextStep = ({ buttonDisabled, onClick, value }) => {
  return (
    <Button
      type='button'
      onClick={buttonDisabled ? null : onClick}
      disabled={buttonDisabled}
    >
      {value}
    </Button>
  )
}

export default ButtonNextStep
