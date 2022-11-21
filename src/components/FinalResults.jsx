import React from 'react'
import Title from '../Containers/Title'
import useWinner from '../hooks/useWinnerPrediction'
import MatchResultList from './MatchResultList'

const FinalResults = () => {
  const { finalMatch, winner } = useWinner()

  return (
    <article className='text-black flex flex-col gap-4'>
      <Title>The final results</Title>
      <div className='grid md:grid-cols-3'>
        <div
          key={finalMatch[0].name + finalMatch[1].name}
          className='bg-black bg-opacity-10 rounded-md overflow-hidden md:col-start-2'
        >
          <MatchResultList teams={finalMatch} winners={[winner.name]} />
        </div>
      </div>
    </article>
  )
}

export default FinalResults
