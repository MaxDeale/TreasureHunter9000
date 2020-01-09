import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";

// functional component with logic to move player

export default function PlayerMovement(player) {
  // the function to get the next position of the player takes in the old position and direction as arguments
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case "west":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "east":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "north":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "south":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  //  this function checks whether the player is at a boundary or not by observing the boundaries of the map

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function observeImpassable(newPos, oldPos) {
    //   retrieving the tiles from the redux store and saving to a new variable
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;

    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    // if tile value is less than 5 it means the player can walk over it
    return nextTile > 5;
  }

  function dispatchMove(newPos) {
    // using redux store to use the type "MOVE_PLAYER"
    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos
      }
    });
  }

  function attemptMove(direction) {
    // retrieving old position of player from redux store
    const oldPos = store.getState().player.position;
    // using the get new position function to get the new position
    const newPos = getNewPosition(oldPos, direction);

    // if both of the functions to check wether there is a boundary or object return false then the move function is carried out and player is able to move

    if (observeBoundaries(oldPos, newPos) && observeImpassable(newPos, oldPos))
      dispatchMove(newPos);
  }

  // function handles keyboard input for  PlayerMovement using keycodes

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return attemptMove("west");

      case 38:
        return attemptMove("north");

      case 39:
        return attemptMove("east");

      case 40:
        return attemptMove("south");

      default:
        console.log(e.keyCode);
    }
  }
  // listens for keyboard input and fires off the function for handling key presses
  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return player;
}
