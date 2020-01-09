import React from "react";
import { SPRITE_SIZE } from "../../config/constants";
import { connect } from "react-redux";
import "./style.css";

// function to determine what tile is of which type
// using the tile map to determine which image is shown and adding the correct name to the class name

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 7:
      return "chest";
  }
}

function MapTile(props) {
  return (
    <div
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
      //   classname will change depending on which number is returned from the map grid
      className={`tile ${getTileSprite(props.tile)}`}
    ></div>
  );
}

// using a function to print out the map tiles
function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}{" "}
    </div>
  );
}

function Map(props) {
  return (
    <div
      style={
        {
          // backgroundColor: "green",
          // border: "4px solid white"
        }
      }
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}{" "}
    </div>
  );
}

// takes the tiles from state and maps them to props
function mapStateToProps(state) {
  return { tiles: state.map.tiles };
}

export default connect(mapStateToProps)(Map);
