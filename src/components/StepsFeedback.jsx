import { useEffect, useState } from 'react'

const StepsFeedback = ({ steps, setStep, currentStep }) => {
  const handleButton = index => () => setStep(index)
  const [lastStepReached, setLastStepReached] = useState(0)

  useEffect(() => {
    if (currentStep > lastStepReached) {
      setLastStepReached(currentStep)
    }
  }, [currentStep])
  return (
    <div className='flex sm:grid sm:grid-cols-5 flex-wrap gap-2 max-w-3xl mx-auto p-2'>
      {steps.map((step, index) => (
        <button
          type='button'
          onClick={index <= lastStepReached ? handleButton(index) : null}
          key={step.title}
          disabled={index > lastStepReached}
          className={`p-4 flex-1 flex flex-col items-center rounded-md bg-gradient-to-r from-rose-700 to-rose-900 scale-90 ${
            index > lastStepReached // disabled styles of steps not reached
              ? 'opacity-40'
              : 'opacity-100 hover:cursor-pointer hover:brightness-150'
          } ${
            index === currentStep // styles of current step
              ? 'md:scale-110 md:transition-transform md:duration-150 brightness-150'
              : ''
          }`}
        >
          <img
            className='w-10 aspect-square grid place-content-center'
            src={step.img}
            alt={`Prediction of world cup ${step.title}`}
          />
          <p className='hidden sm:block text-black font-bold'>{step.title}</p>
        </button>
      ))}
    </div>
  )
}

export default StepsFeedback
