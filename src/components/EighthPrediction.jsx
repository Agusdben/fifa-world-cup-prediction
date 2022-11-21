import { useEffect, useMemo, useState } from 'react'
import Section from '../Containers/Section'
import Title from '../Containers/Title'
import useEightPrediction from '../hooks/useEightPrediction'
import useGroupStagePrediction from '../hooks/useGroupStagePrediction'
import { isIncluded } from '../utiles'
import ButtonStep from './ButtonStep'
import Match from './Match'

const EighthPrediction = ({ handleNextStep, handlePrevStep }) => {
  const {
    eighthWinners,
    matchesFirstAgainstSeconds,
    matchesSecondsAgainstFirst,
    setEightWinners
  } = useEightPrediction()
  const { groupStageWinners } = useGroupStagePrediction()
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const teamsWinners = useMemo(
    () => eighthWinners.map(winner => winner?.name),
    [setEightWinners]
  )

  useEffect(() => {
    const groupStageTeams = groupStageWinners
      .map(winner => {
        const { teams } = winner
        return [teams[0].name, teams[1].name]
      })
      .flat(1)
    if (teamsWinners.every(team => isIncluded(groupStageTeams, team))) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [setEightWinners])

  return (
    <Section>
      <Title>Eights</Title>
      <article className='flex gap-5 flex-wrap justify-center'>
        {matchesFirstAgainstSeconds.map((match, i) => (
          <Match
            key={match[0].name + match[1].name}
            match={match}
            matchIndex={i}
            setResult={setEightWinners}
            firstChecked={isIncluded(teamsWinners, match[0].name)}
            secondChecked={isIncluded(teamsWinners, match[1].name)}
          />
        ))}
        {matchesSecondsAgainstFirst.map((match, i) => (
          <Match
            key={match[0].name + match[1].name}
            match={match}
            matchIndex={i + 4}
            setResult={setEightWinners}
            firstChecked={isIncluded(teamsWinners, match[0].name)}
            secondChecked={isIncluded(teamsWinners, match[1].name)}
          />
        ))}
      </article>
      <article className='flex gap-5 justify-center'>
        <ButtonStep
          value='Back'
          onClick={handlePrevStep}
          buttonDisabled={false}
        />
        <ButtonStep
          value='Next'
          buttonDisabled={buttonDisabled}
          onClick={handleNextStep}
        />
      </article>
    </Section>
  )
}

export default EighthPrediction
