import { useContext, useMemo } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'

const useEightPrediction = () => {
  const { eighthWinners, groupStageWinners, dispatch } = useContext(
    PredictionContext
  )

  const setEightWinners = ({ index, team }) => {
    eighthWinners[index] = team
    dispatch({ type: ACTIONS.SAVE_EIGHT_WINNERS, payload: eighthWinners })
  }

  const matchesFirstAgainstSeconds = useMemo(() => {
    const matches = []
    let pair = []
    for (let i = 0; i < groupStageWinners.length; i += 1) {
      if (i % 2) {
        pair.push(groupStageWinners[i].teams[1])
      } else {
        pair.push(groupStageWinners[i].teams[0])
      }

      if (pair.length === 2) {
        matches.push(pair)
        pair = []
      }
    }
    return matches
  }, [groupStageWinners])

  const matchesSecondsAgainstFirst = useMemo(() => {
    const matches = []
    let pair = []
    for (let i = 0; i < groupStageWinners.length; i += 1) {
      if (i % 2) {
        pair.push(groupStageWinners[i].teams[0])
      } else {
        pair.push(groupStageWinners[i].teams[1])
      }

      if (pair.length === 2) {
        matches.push(pair)
        pair = []
      }
    }
    return matches
  }, [groupStageWinners])
  return {
    eighthWinners,
    matchesFirstAgainstSeconds,
    matchesSecondsAgainstFirst,
    setEightWinners
  }
}

export default useEightPrediction
