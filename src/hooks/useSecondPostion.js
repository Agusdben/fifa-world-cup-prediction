import { useContext } from 'react'
import { PredictionContext } from '../context/PredictionContext'
import { ACTIONS } from '../reducers/predictionReducer'

const useSecondPosition = () => {
  const { secondPosition, dispatch } = useContext(PredictionContext)

  const saveSecondPosition = ({ team }) => {
    dispatch({
      type: ACTIONS.SAVE_SECOND_POSITION,
      payload: team
    })
  }

  return {
    secondPosition,
    saveSecondPosition
  }
}

export default useSecondPosition
