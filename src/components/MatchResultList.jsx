import React from 'react'
import { findIndex, isIncluded } from '../utiles'
import TeamFlagImage from './TeamFlagImage'

const ORDINALS = {
  1: '1st',
  2: '2nd'
}

const MatchResultList = ({ teams, winners = [], ordinals = false }) => {
  return (
    <ul className='flex justify-center flex-col gap-2 p-2 text-black'>
      {teams.map(team => {
        const isWinner = isIncluded(winners, team.name)
        const winnerPosition = isWinner
          ? findIndex(winners, team.name)
          : undefined
        return (
          <li
            key={team.name}
            className={`flex gap-2 font-bold ${
              isWinner ? 'after:content-["✔"]' : ''
            }`}
          >
            <TeamFlagImage
              src={team.flag}
              alt={`${team.name} flag`}
              kind='small'
            />
            <span>{team.name}</span>
            {ordinals ? <span>{ORDINALS[winnerPosition + 1]}</span> : null}
          </li>
        )
      })}
    </ul>
  )
}

export default MatchResultList
