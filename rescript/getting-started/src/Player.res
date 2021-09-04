type vector2 = {
    x: float,
    y: float
}

@unboxed type local = Local(vector2)
@unboxed type global = Global(vector2)

let localCoordinates = Local({ x: 20.0, y: 10.0 })

let localToGlobal = (Local(coordinates)) => {
    Global({
        x: coordinates.x +. 5.,
        y: coordinates.y +. 10.
    });
}


let renderPlayer = (Global(coordinates)) => {
    Js.log3("Player rendered at", coordinates.x, coordinates.y)
}

renderPlayer(localCoordinates->localToGlobal)