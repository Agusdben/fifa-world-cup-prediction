import React from 'react'
import GROUPS from '../constants/groups'
import useGroupStagePrediction from '../hooks/useGroupStagePrediction'
import MatchResultList from './MatchResultList'

const GroupResults = () => {
  const { groupStageWinners } = useGroupStagePrediction()

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 '>
      {GROUPS.map((group, index) => (
        <div
          key={group.group}
          className='flex flex-col rounded-md overflow-hidden bg-black bg-opacity-10'
        >
          <h2 className='p-2 text-white bg-gradient-to-r font-bold from-rose-700 to-rose-900'>
            Group {group.group}
          </h2>
          <MatchResultList
            teams={group.teams}
            winners={groupStageWinners[index].teams.map(team => team?.name)}
            ordinals
          />
        </div>
      ))}
    </div>
  )
}

export default GroupResults
