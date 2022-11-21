import { useContext, useMemo } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'
import { arrayToPairArray } from '../utiles'

const useSemifinalsPrediction = () => {
  const {
    semifinalWinners,
    fourthsWinners,
    semifinalLossers,
    dispatch
  } = useContext(PredictionContext)

  const saveSemifinalWinners = ({ index, team }) => {
    semifinalWinners[index] = team
    dispatch({
      type: ACTIONS.SAVE_SEMIFINAL_WINNERS,
      payload: semifinalWinners
    })
  }

  const saveSemifinalLossers = ({ index, team }) => {
    semifinalLossers[index] = team
    dispatch({
      type: ACTIONS.SAVE_SEMIFINAL_LOSSERS,
      payload: semifinalLossers
    })
  }

  const semifinalsMatches = useMemo(() => arrayToPairArray(fourthsWinners), [
    fourthsWinners
  ])

  return {
    semifinalWinners,
    semifinalLossers,
    semifinalsMatches,
    saveSemifinalWinners,
    saveSemifinalLossers
  }
}

export default useSemifinalsPrediction
