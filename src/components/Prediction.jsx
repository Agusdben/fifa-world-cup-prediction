import { useState } from 'react'
import EighthPrediction from './EighthPrediction'
import FourthsPrediction from './FourthsPrediction'
import GroupStage from './GroupStage'
import LastStage from './LastStage'
import SemifinalPrediction from './SemifinalPrediction'
import StepsFeedback from './StepsFeedback'
import GROUP_IMG from '../assets/group.svg'
import EIGHT_IMG from '../assets/number-8.svg'
import FOURTH_IMG from '../assets/number-4.svg'
import SEMIFINAL_IMG from '../assets/tournament-simifinal.svg'
import FINAL_IMG from '../assets/podium.svg'
import ResetButton from './ResetButton'
import useResetPrediction from '../hooks/useResetPrediction'

const initialStep = 0

const Prediction = () => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const { resetPrediction } = useResetPrediction()

  const handleNextSte = () => {
    const nextStep = currentStep + 1
    if (nextStep > steps.length) {
      return
    }
    setCurrentStep(nextStep)
  }

  const handlePrevStep = () => {
    const prevStep = currentStep - 1
    if (prevStep < 0) {
      return
    }
    setCurrentStep(prevStep)
  }

  const setStep = index => {
    setCurrentStep(index)
  }

  const steps = [
    {
      title: 'Groups',
      img: GROUP_IMG,
      component: <GroupStage key='GroupStage' handleNextStep={handleNextSte} />
    },
    {
      title: 'Eights',
      img: EIGHT_IMG,
      component: (
        <EighthPrediction
          key='EighthPrediction'
          handleNextStep={handleNextSte}
          handlePrevStep={handlePrevStep}
        />
      )
    },
    {
      title: 'Fourths',
      img: FOURTH_IMG,
      component: (
        <FourthsPrediction
          key='FourthsPrediction'
          handleNextStep={handleNextSte}
          handlePrevStep={handlePrevStep}
        />
      )
    },
    {
      title: 'Semifinals',
      img: SEMIFINAL_IMG,
      component: (
        <SemifinalPrediction
          key='SemifinalPrediction'
          handleNextStep={handleNextSte}
          handlePrevStep={handlePrevStep}
        />
      )
    },
    {
      title: 'Final',
      img: FINAL_IMG,
      component: <LastStage key='LastStage' handlePrevStep={handlePrevStep} />
    }
  ]

  return (
    <div className='flex-1 flex flex-col'>
      <ResetButton type='button' onClick={resetPrediction} />
      <StepsFeedback
        steps={steps}
        setStep={setStep}
        currentStep={currentStep}
      />
      {steps[currentStep].component}
    </div>
  )
}

export default Prediction
