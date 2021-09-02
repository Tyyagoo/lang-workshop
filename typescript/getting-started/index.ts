class Empty {}

class Car {
    drive() {
      console.log("hit the gas!");
    }

}

class Golfer {
    drive() {
      console.log("hit the ball");
    }
}

interface Vector2 {
    x: number;
    y: number;
}

interface Entity {
    name: string;
}

const showEntity = (entity: Entity) => console.log("There's a named entity -> " + entity.name);
const showPosition = (pos: Vector2) => console.log("x: " + pos.x + " y: " + pos.y);
const showPositionedEntity = (posEnt: Entity & Vector2) => 
    console.log(`There's an human: \nName: ${posEnt.name}\nPosition: (${posEnt.x}, ${posEnt.y})`);
const showEmpty = (empty: Empty) => console.log(empty);

const main = () => {
    let point = {
        x: 20,
        y: -10,
    }

    let god = {
        name: 'Deus',
    }

    let human = {
        name: 'Thiago',
        x: 139,
        y: 247,
    }

    showEntity(god);
    showEntity(human);
    // showEntity(point); -> Point doesn't have 'name'

    showPosition(point);
    showPosition(human);
    // showPosition(god); -> God is omnipresent

    showPositionedEntity(human);
    // showPositionedEntity(god);
    // showPositionedEntity(point);
};

const main2 = () => {
    let emp = {};
    let a = {k: 2};

    showEmpty(emp);
    showEmpty(a);

    /*
    'a' has all of the properties that Empty does, because Empty has no properties. 
    So 'a' is Empty '-'.
    */

    let car : Car = new Golfer();
    let golfer : Golfer = new Car();
    car.drive();
    golfer.drive();
    // '----'
}

// main();
main2();