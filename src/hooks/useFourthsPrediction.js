import { useContext, useMemo } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'
import { arrayToPairArray } from '../utiles'

const useFourthsPrediction = () => {
  const { fourthsWinners, eighthWinners, dispatch } = useContext(
    PredictionContext
  )

  const saveFourthsWinners = ({ index, team }) => {
    fourthsWinners[index] = team
    dispatch({ type: ACTIONS.SAVE_FOURTHS_WINNERS, payload: fourthsWinners })
  }

  const fourthMatches = useMemo(() => arrayToPairArray(eighthWinners), [
    eighthWinners
  ])

  return {
    fourthsWinners,
    fourthMatches,
    saveFourthsWinners
  }
}

export default useFourthsPrediction
