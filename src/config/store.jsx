import { createStore, combineReducers } from "redux";
import PlayerReducer from "../features/player/PlayerReducer";
import MapReducer from "../features/map/MapReducer";

// one main reducer that cobines the map and player reducers
const rootReducer = combineReducers({ player: PlayerReducer, map: MapReducer });

// creating redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
