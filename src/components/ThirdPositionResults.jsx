import React from 'react'
import Title from '../Containers/Title'
import useThirdPosition from '../hooks/useThirdPosition'
import MatchResultList from './MatchResultList'

const ThirdPositionResults = () => {
  const { thirdPositionMatch, thirdPosition } = useThirdPosition()

  return (
    <article className='text-black flex flex-col gap-4'>
      <Title>Third position results</Title>
      <div className='grid md:grid-cols-3'>
        <div
          key={thirdPositionMatch[0].name + thirdPositionMatch[1].name}
          className='bg-black bg-opacity-10 rounded-md overflow-hidden md:col-start-2'
        >
          <MatchResultList
            teams={thirdPositionMatch}
            winners={[thirdPosition.name]}
          />
        </div>
      </div>
    </article>
  )
}

export default ThirdPositionResults
