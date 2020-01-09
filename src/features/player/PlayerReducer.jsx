const initialState = {
  position: [0, 0]
};

const PlayerReducer = (state = initialState, action) => {
  // reducer for player movement , takes action as the argument and acts accordingly
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default PlayerReducer;
