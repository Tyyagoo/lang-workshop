// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


var localCoordinates = {
  x: 20.0,
  y: 10.0
};

function localToGlobal(coordinates) {
  return {
          x: coordinates.x + 5,
          y: coordinates.y + 10
        };
}

function renderPlayer(coordinates) {
  console.log("Player rendered at", coordinates.x, coordinates.y);
  
}

renderPlayer(localToGlobal(localCoordinates));

exports.localCoordinates = localCoordinates;
exports.localToGlobal = localToGlobal;
exports.renderPlayer = renderPlayer;
/*  Not a pure module */
