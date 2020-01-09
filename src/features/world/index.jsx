import React from "react";
import Player from "../player/Index";
import Map from "../map/Index";

import { tiles } from "./tiles";
import store from "../../config/store";

// functional component to display the World, adds the specific tiles from the redux store to map out the world
function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles
    }
  });
  return (
    <div
      style={{
        width: "850px",
        height: "450px",
        margin: "20px auto",
        position: "relative"
        // backgroundColor: "green"
      }}
    >
      {" "}
      <Map />
      <Player />
    </div>
  );
}

export default World;
