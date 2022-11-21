import React from 'react'
import Title from '../Containers/Title'
import useEightPrediction from '../hooks/useEightPrediction'
import MatchResultList from './MatchResultList'

const EightsResults = () => {
  const {
    matchesFirstAgainstSeconds,
    matchesSecondsAgainstFirst,
    eighthWinners
  } = useEightPrediction()
  const teamsWinners = eighthWinners.map(team => team?.name)

  const matches = matchesFirstAgainstSeconds.concat([
    ...matchesSecondsAgainstFirst
  ])

  console.log(matches)
  return (
    <article className='text-black flex flex-col gap-4'>
      <Title>Eights results</Title>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {matches.map(match => (
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

export default EightsResults
