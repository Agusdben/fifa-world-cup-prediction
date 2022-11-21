export const INITIAL_STATE = {
  groupStageWinners: Array.from({ length: 8 }, (v, i) => {
    return {
      group: String.fromCharCode(65 + i), // A,B,C ... H
      teams: Array(2).fill(null)
    }
  }),
  eighthWinners: Array.from({ length: 8 }),
  fourthsWinners: Array.from({ length: 4 }),
  semifinalWinners: Array.from({ length: 2 }),
  semifinalLossers: Array.from({ length: 2 }),
  winner: null,
  secondPostion: null,
  thirdPosition: null
}

export const ACTIONS = {
  SAVE_GROUP_WINNERS: 'SAVE_GROUP_WINNERS',
  SAVE_EIGHT_WINNERS: 'SAVE_EIGHT_WINNERS',
  SAVE_FOURTHS_WINNERS: 'SAVE_FOURTHS_WINNERS',
  SAVE_SEMIFINAL_WINNERS: 'SAVE_SEMIFINAL_WINNERS',
  SAVE_SEMIFINAL_LOSSERS: 'SAVE_SEMIFINAL_LOSSERS',
  SAVE_WINNER: 'SAVE_WINNER',
  SAVE_SECOND_POSITION: 'SAVE_SECOND_POSITION',
  SAVE_THIRD_POSITION: 'SAVE_THIRD_POSITION'
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTIONS.SAVE_GROUP_Winners:
      return {
        ...state,
        groupStageWinners: payload
      }
    case ACTIONS.SAVE_EIGHT_WINNERS:
      return {
        ...state,
        eighthWinners: payload
      }
    case ACTIONS.SAVE_FOURTHS_WINNERS:
      return {
        ...state,
        fourthsWinners: payload
      }
    case ACTIONS.SAVE_SEMIFINAL_WINNERS:
      return {
        ...state,
        semifinalWinners: payload
      }
    case ACTIONS.SAVE_SEMIFINAL_LOSSERS:
      return {
        ...state,
        semifinalLossers: payload
      }
    case ACTIONS.SAVE_WINNER:
      return {
        ...state,
        winner: payload
      }
    case ACTIONS.SAVE_SECOND_POSITION:
      return {
        ...state,
        secondPostion: payload
      }
    case ACTIONS.SAVE_THIRD_POSITION:
      return {
        ...state,
        thirdPosition: payload
      }
    default:
      return state
  }
}
