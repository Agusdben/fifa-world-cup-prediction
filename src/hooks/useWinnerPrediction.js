import { useContext, useMemo } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'
import { arrayToPairArray } from '../utiles'

const useWinner = () => {
  const { winner, semifinalWinners, dispatch } = useContext(PredictionContext)

  const saveWinner = ({ team }) => {
    dispatch({
      type: ACTIONS.SAVE_WINNER,
      payload: team
    })
  }

  const [finalMatch] = useMemo(() => arrayToPairArray(semifinalWinners), [
    semifinalWinners
  ])

  return {
    winner,
    finalMatch,
    saveWinner
  }
}

export default useWinner
