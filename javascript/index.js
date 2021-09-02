// https://dzone.com/articles/javascript-java-developers-0
console.log("Hi");

/*
The main difference between let and var is that scope of a variable defined with let is limited 
to the block in which it is declared while variable declared with var has the global scope. 
So we can say that var is rather a keyword which defines a variable globally regardless of block scope.
*/

const objects = function() {
    let superhero = {
        name: 'Spiderman',
        age: 20,
        fly: function() { console.log(this.name + " is flying!")},
        birthday: function() {console.log("Today is the birthday of " + this.name + ", " + this.age + " -> " + ++this.age)},
    };
    
    superhero.fly();
    superhero.birthday();
}

const prototypes = function () {
    let owner = {
        editor: 'Marvel Studios',
    }

    let showFunction = function () {
        console.log(this.title + " is owned by " + this.editor + "!");
    };

    let ironMan = {
        __proto__: owner,
        title: 'Iron Man',
        show: showFunction,
    }

    let spiderMan = {
        __proto__: owner,
        title: 'Spiderman',
        show: showFunction,
    }

    ironMan.show();
    spiderMan.show();

    owner.editor = 'Marvel Studios (Disney)';

    ironMan.show();
    spiderMan.show();
}

const constructors = function () {
    const showFunction = function() {
        console.log(this.name + " has been owned by " + this.editor + " for " + this.age + " years!");
    }

    let marvel = {
        editor: 'Marvel Studios',
    }

    const builder = (name, age, owner) => {
        return {
            name, 
            age, 
            __proto__: owner,
            show: showFunction,
        };
    };

    let ironman = builder("Iron Man", 82, marvel);
    let spiderman = builder("Spiderman", 82, marvel);

    ironman.show();
    spiderman.show();

    let disney = {
        editor: 'Marvel Studios (Disney)',
    }

    ironman.__proto__ = disney;
    spiderman.__proto__ = disney;

    ironman.age = 12;
    spiderman.age = 12;

    ironman.show();
    spiderman.show();
}

const scopes = function () {
    // use let to define a block-scoped variable.
    const counterLoop = () => {
        console.log('counter before declaration = ' + i); 
        for (var i = 0; i < 3 ; i++) {
            console.log('counter = ' + i);
        }
        console.log('counter after loop = ' + i);
    }
    
    counterLoop(); 
}


// objects();
// prototypes();
// constructors();
// scopes();