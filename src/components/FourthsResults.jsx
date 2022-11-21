import React from 'react'
import Title from '../Containers/Title'
import useFourthsPrediction from '../hooks/useFourthsPrediction'
import MatchResultList from './MatchResultList'

const FourthsResults = () => {
  const { fourthMatches, fourthsWinners } = useFourthsPrediction()
  const teamsWinners = fourthsWinners.map(team => team?.name)

  return (
    <article className='text-black flex flex-col gap-4'>
      <Title>Fourths results</Title>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {fourthMatches.map(match => (
          <div
            key={match[0].name + match[1].name}
            className='bg-black bg-opacity-10 rounded-md overflow-hidden'
          >
            <MatchResultList teams={match} winners={teamsWinners} />
          </div>
        ))}
      </div>
    </article>
  )
}

export default FourthsResults
