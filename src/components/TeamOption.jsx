import { useEffect, useState } from 'react'
import useGroupStagePrediction from '../hooks/useGroupStagePrediction'

const TeamOption = ({ team, group, selected }) => {
  const { groupStageWinners } = useGroupStagePrediction()
  const [disabled, setDisabled] = useState(false)

  const handleDisabled = () => {
    const [thisGroup] = groupStageWinners.filter(groupAux => {
      return groupAux.group === group
    })
    const teamsSelected = thisGroup.teams.map(team => team?.name)
    return teamsSelected.includes(team.name)
  }

  useEffect(() => {
    setDisabled(handleDisabled())
  }, [groupStageWinners])

  return (
    <option
      className='bg-black'
      value={team.name}
      disabled={disabled}
      selected={selected}
    >
      {team.name}
    </option>
  )
}

export default TeamOption
