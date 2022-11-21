import { useMemo, useState, useEffect } from 'react'
import GROUPS from '../constants/groups'
import Section from '../Containers/Section'
import Title from '../Containers/Title'
import useGroupStagePrediction from '../hooks/useGroupStagePrediction'
import ButtonStep from './ButtonStep'
import GroupPredictionPair from './GroupPredictionPair'

const GroupStage = ({ handleNextStep }) => {
  const { groupStageWinners } = useGroupStagePrediction()
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const teams = useMemo(() => {
    return groupStageWinners
      .map(group => {
        const { teams } = group
        return [teams[0], teams[1]]
      })
      .flat(1)
  }, [groupStageWinners])

  useEffect(() => {
    if (teams.every(team => team)) {
      setButtonDisabled(false)
    }
  }, [groupStageWinners])

  return (
    <Section>
      <Title>Group stage</Title>
      <article className='flex max-w-7xl flex-1 flex-wrap gap-4 lg:grid lg:grid-cols-4'>
        {GROUPS.map(group => (
          <GroupPredictionPair
            key={group.group}
            teams={group.teams}
            group={group.group}
          />
        ))}
      </article>
      <article className='self-end'>
        <ButtonStep
          value='Next'
          buttonDisabled={buttonDisabled}
          onClick={buttonDisabled ? null : handleNextStep}
        />
      </article>
    </Section>
  )
}

export default GroupStage
