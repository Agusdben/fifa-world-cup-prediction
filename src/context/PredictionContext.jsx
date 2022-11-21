import { useReducer, createContext } from 'react'
import { INITIAL_STATE, reducer } from '../reducers/predictionReducer'

export const PredictionContext = createContext({})

const PredictionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <PredictionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PredictionContext.Provider>
  )
}

export default PredictionContextProvider
