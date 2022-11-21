import React from 'react'
import Title from '../Containers/Title'
import useSemifinalsPrediction from '../hooks/useSemifinalsPrediction'
import MatchResultList from './MatchResultList'

const SemifinalResults = () => {
  const { semifinalWinners, semifinalsMatches } = useSemifinalsPrediction()
  const teamsWinners = semifinalWinners.map(team => team?.name)

  return (
    <article className='text-black flex flex-col gap-4'>
      <Title>Semifinals results</Title>
      <div className='grid gap-4 sm:grid-cols-2 '>
        {semifinalsMatches.map(match => (
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

export default SemifinalResults
