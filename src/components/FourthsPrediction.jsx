import { useMemo, useState, useEffect } from 'react'
import Section from '../Containers/Section'
import Title from '../Containers/Title'
import useEightPrediction from '../hooks/useEightPrediction'
import useFourthsPrediction from '../hooks/useFourthsPrediction'
import { isIncluded } from '../utiles'
import ButtonStep from './ButtonStep'
import Match from './Match'

const FourthsPrediction = ({ handleNextStep, handlePrevStep }) => {
  const {
    fourthsWinners,
    fourthMatches,
    saveFourthsWinners
  } = useFourthsPrediction()
  const { eighthWinners } = useEightPrediction()
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const teamsWinners = useMemo(() => {
    return fourthsWinners.map(team => team?.name)
  }, [saveFourthsWinners])

  useEffect(() => {
    const eightTeamsWinners = eighthWinners.map(team => team?.name)
    if (
      fourthsWinners.every(team => isIncluded(eightTeamsWinners, team?.name))
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [saveFourthsWinners])

  return (
    <Section className=''>
      <Title>Fourths</Title>
      <article className='flex gap-5 flex-wrap justify-center md:grid md:grid-cols-2 m-auto'>
        {fourthMatches.map((match, i) => (
          <Match
            key={match[0].name + match[1].name}
            match={match}
            matchIndex={i}
            setResult={saveFourthsWinners}
            firstChecked={isIncluded(teamsWinners, match[0].name)}
            secondChecked={isIncluded(teamsWinners, match[1].name)}
          />
        ))}
      </article>
      <article className='self-center flex gap-5'>
        <ButtonStep
          value='Back'
          buttonDisabled={false}
          onClick={handlePrevStep}
        />
        <ButtonStep
          value='Next'
          buttonDisabled={buttonDisabled}
          onClick={buttonDisabled ? null : handleNextStep}
        />
      </article>
    </Section>
  )
}

export default FourthsPrediction
