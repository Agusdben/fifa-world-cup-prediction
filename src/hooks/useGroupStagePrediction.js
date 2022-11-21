import { useContext } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'

const useGroupStagePrediction = () => {
  const { groupStageWinners, dispatch } = useContext(PredictionContext)

  const setFirstPostion = ({ team, group }) => {
    const newState = groupStageWinners.map(groupStage => {
      if (groupStage.group === group) {
        groupStage.teams[0] = team
      }
      return groupStage
    })

    dispatch({ action: ACTIONS.SAVE_GROUP_WINNERS, payload: newState })
  }

  const setSecondPostion = ({ team, group }) => {
    const newState = groupStageWinners.map(groupStage => {
      if (groupStage.group === group) {
        groupStage.teams[1] = team
      }
      return groupStage
    })

    dispatch({ action: ACTIONS.SAVE_GROUP_WINNERS, payload: newState })
  }

  return {
    groupStageWinners,
    setFirstPostion,
    setSecondPostion
  }
}

export default useGroupStagePrediction
