import useGroupStagePrediction from '../hooks/useGroupStagePrediction'
import SelectTeam from './SelectTeam'
import TeamFlagImage from './TeamFlagImage'
import GOLD_MEDAL from '../assets/gold-medal.svg'
import SILVER_MEDAL from '../assets/silver-medal.svg'
import { useMemo } from 'react'
import { isIncluded } from '../utiles'

const CLASSIFICATION = {
  first: 'First',
  second: 'Second'
}

const GroupPredictionPair = ({ teams, group }) => {
  const {
    groupStageWinners,
    setFirstPostion,
    setSecondPostion
  } = useGroupStagePrediction()

  const firstWinners = useMemo(() => {
    return groupStageWinners.map(winner => winner?.teams[0]?.name)
  }, [setFirstPostion])

  const secondWinners = useMemo(() => {
    return groupStageWinners.map(winner => winner?.teams[1]?.name)
  }, [setSecondPostion])

  return (
    <div className='flex flex-1 flex-col gap-4 p-2 bg-gradient-to-br from-rose-700 rounded-md to-rose-900 shadow-lg shadow-black'>
      <header className='flex flex-col gap-2 pb-2 bg-black bg-opacity-40'>
        <h2 className='font-bold text-center'>Group {group}</h2>
        <div className='flex justify-center gap-3'>
          {teams.map(team => (
            <TeamFlagImage
              kind='small'
              key={`${team.name} flag`}
              src={team.flag}
              alt={`${team.name} flag`}
            />
          ))}
        </div>
      </header>
      <div className='flex flex-col justify-between gap-6'>
        <div className='flex gap-2'>
          <img
            className='w-4'
            loading='lazy'
            src={GOLD_MEDAL}
            alt='gold medal for first position'
          />
          <SelectTeam
            teams={teams}
            classification={CLASSIFICATION.first}
            group={group}
            onChange={setFirstPostion}
            teamsSelected={teams.map(team => {
              return isIncluded(firstWinners, team.name)
            })} // arr 4 positions booleans
          />
        </div>
        <div className='flex gap-2'>
          <img
            className='w-4'
            loading='lazy'
            src={SILVER_MEDAL}
            alt='silver medal for second position'
          />
          <SelectTeam
            teams={teams}
            classification={CLASSIFICATION.second}
            group={group}
            onChange={setSecondPostion}
            teamsSelected={teams.map(team => {
              return isIncluded(secondWinners, team.name)
            })} // arr 4 positions booleans
          />
        </div>
      </div>
    </div>
  )
}

export default GroupPredictionPair
