import Section from '../Containers/Section'
import Title from '../Containers/Title'
import useThirdPosition from '../hooks/useThirdPosition'
import Match from './Match'

const ThirdPositionPrediction = () => {
  const {
    thirdPosition,
    thirdPositionMatch,
    saveThirdPosition
  } = useThirdPosition()

  return (
    <Section>
      <Title>Third position</Title>
      <article className='m-auto'>
        <Match
          key={thirdPositionMatch[0].name + thirdPositionMatch[1].name}
          match={thirdPositionMatch}
          matchIndex={0}
          setResult={saveThirdPosition}
          firstChecked={thirdPosition?.name === thirdPositionMatch[0]?.name}
          secondChecked={thirdPosition?.name === thirdPositionMatch[1]?.name}
        />
      </article>
    </Section>
  )
}

export default ThirdPositionPrediction
