const initialState = {
  tiles: []
};

// Map reducer simply adds the tiles to the map from state

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TILES":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default MapReducer;
