import { useEffect, useMemo, useState } from 'react'
import Section from '../Containers/Section'
import Title from '../Containers/Title'
import useFourthsPrediction from '../hooks/useFourthsPrediction'
import useSemifinalsPrediction from '../hooks/useSemifinalsPrediction'
import { isIncluded } from '../utiles'
import ButtonStep from './ButtonStep'
import Match from './Match'

const SemifinalPrediction = ({ handleNextStep, handlePrevStep }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const {
    semifinalWinners,
    semifinalsMatches,
    saveSemifinalWinners,
    saveSemifinalLossers
  } = useSemifinalsPrediction()

  const { fourthsWinners } = useFourthsPrediction()

  const teamsWinners = useMemo(() => {
    return semifinalWinners.map(team => team?.name)
  }, [semifinalWinners])

  const setResult = ({ team, index }) => {
    saveSemifinalWinners({ team, index })
    const [losserTeam] = semifinalsMatches[index].filter(
      match => match.name !== team.name
    )
    saveSemifinalLossers({ index, team: losserTeam })
  }

  useEffect(() => {
    const fourthsTeamsWinner = fourthsWinners.map(team => team?.name)

    if (
      semifinalWinners.every(team => isIncluded(fourthsTeamsWinner, team?.name))
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [setResult])

  return (
    <Section>
      <Title>Semifinals</Title>
      <article className='flex flex-col gap-5 items-center'>
        {semifinalsMatches.map((match, i) => (
          <Match
            key={match[0].name + match[1].name}
            match={match}
            matchIndex={i}
            setResult={setResult}
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

export default SemifinalPrediction
