import { useContext, useMemo } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'
import { arrayToPairArray } from '../utiles'

const useThirdPosition = () => {
  const { thirdPosition, semifinalLossers, dispatch } = useContext(
    PredictionContext
  )

  const saveThirdPosition = ({ team }) => {
    dispatch({
      type: ACTIONS.SAVE_THIRD_POSITION,
      payload: team
    })
  }

  const [thirdPositionMatch] = useMemo(
    () => arrayToPairArray(semifinalLossers),
    [semifinalLossers]
  )

  return {
    thirdPosition,
    thirdPositionMatch,
    saveThirdPosition
  }
}

export default useThirdPosition
