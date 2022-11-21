import Button from '../Containers/Button'

const ResetButton = ({ ...props }) => {
  return (
    <div className='flex justify-center max-w-3xl mx-auto sm:justify-end mb-5'>
      <Button {...props}>Start again</Button>
    </div>
  )
}

export default ResetButton
