import Title from '../Containers/Title'
import useSecondPosition from '../hooks/useSecondPostion'
import useWinner from '../hooks/useWinnerPrediction'
import Match from './Match'
import Section from '../Containers/Section'

const FinalPrediction = () => {
  const { winner, finalMatch, saveWinner } = useWinner()
  const { saveSecondPosition } = useSecondPosition()

  const setResult = ({ team }) => {
    saveWinner({ team })
    const [secondPosition] = finalMatch.filter(
      teamAux => teamAux?.name !== team?.name
    )
    saveSecondPosition({ team: secondPosition })
  }

  return (
    <Section>
      <Title>Final</Title>
      <article className='m-auto'>
        <Match
          key={finalMatch[0].name + finalMatch[1].name}
          match={finalMatch}
          matchIndex={0}
          setResult={setResult}
          firstChecked={winner?.name === finalMatch[0].name}
          secondChecked={winner?.name === finalMatch[1].name}
        />
      </article>
    </Section>
  )
}

export default FinalPrediction
