const useResetPrediction = () => {
  const resetPrediction = () => {
    window.location.reload()
  }

  return {
    resetPrediction
  }
}

export default useResetPrediction
