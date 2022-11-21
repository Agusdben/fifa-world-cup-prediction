import { useEffect, useState } from 'react'
import Section from '../Containers/Section'
import useModal from '../hooks/useModal'
import useThirdPosition from '../hooks/useThirdPosition'
import useWinner from '../hooks/useWinnerPrediction'
import ButtonStep from './ButtonStep'
import FinalPrediction from './FinalPrediction'
import ModalMyPrediction from './ModalMyPrediction'
import ThirdPositionPrediction from './ThirdPositionPrediction'

const LastStage = ({ handlePrevStep }) => {
  const { winner } = useWinner()
  const { thirdPosition } = useThirdPosition()
  const [isPredictionCompleted, setIsPredictionCompleted] = useState(false)
  const modalMyPrediction = useModal({ title: 'My prediction' })

  useEffect(() => {
    if (winner && thirdPosition) {
      setIsPredictionCompleted(true)
    } else {
      setIsPredictionCompleted(false)
    }
  }, [winner, thirdPosition])

  return (
    <Section className='flex flex-col'>
      <section className='flex flex-wrap gap-6 items-end max-w-3xl m-auto'>
        <FinalPrediction />
        <ThirdPositionPrediction />
      </section>
      <article className='self-center flex gap-5'>
        <ButtonStep
          value='Prev'
          buttonDisabled={false}
          onClick={handlePrevStep}
        />
        <ButtonStep
          value='My prediction'
          buttonDisabled={!isPredictionCompleted}
          onClick={modalMyPrediction.handleModal}
        />
      </article>
      <ModalMyPrediction {...modalMyPrediction} />
    </Section>
  )
}

export default LastStage
