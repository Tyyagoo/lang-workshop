class Person {
    name: string;
    age: number;
    alive: boolean;
    languages: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.alive = true;
        this.languages = [];
    }

    learnLanguage (lang: string) : void {
        this.languages.push(lang);
    };

    toString () : string {
        return this.alive ? 
            `${this.name} is ${this.age} years old, and know these languages: ${this.languages.toString()}` :
            `R.I.P ${this.name} :(`;
    }
}

const main = () => {
    let me = new Person("Thiago", 18);
    let another = new Person("Strange", 25);

    me.learnLanguage('PT-BR');
    me.learnLanguage('Java');
    me.learnLanguage('Typescript (a superset of Javascript!)');

    another.alive = false;

    console.log(me);
    console.log(another);

    console.log(me.toString());
    console.log(another.toString());
};

const optionals = () => {
    const printUppercasedName = (obj: { first: string; last?: string }) => {
        let fullname = obj.first.toUpperCase();

        if (obj.last !== undefined) {
            fullname += ` ${obj.last.toUpperCase()}`;
        }

        console.log(fullname);
    };

    let me = {
        first: 'Thiago',
        last: 'Santos',
    }

    let another = {
        first: 'Strange',
    }

    let unknown = {
        last: 'Where\'s my first name?'
    }

    printUppercasedName(me);
    printUppercasedName(another);
    // printUppercasedName(unknown); -> forbidden
};

// main();
// optionals();

function printText(s: string, alignment: "left" | "right" | "center") {
    // do something
};

printText("Hi", "left");
// printText("World", "rigth");

// type alias
type ID = number | string;


interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

interface Bear extends Animal {
    hibernate: boolean
}

/*
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
*/

/*
TYPES vs INTERFACES

https://www.typescriptlang.org/play?ssl=25&ssc=2&pln=22&pc=12#code/PTAEEEDtQS0gXApgJwGYEMDGjSfdAIx2UQFoB7AB0UkQBMAoEUfO0Wgd1ADd0AbAK6IAzizp16ALgYM4SNFhwBZdAFtV-UAG8GoPaADmNAcMmhh8ZHAMMAvjLkoM2UCvWad+0ARL0A-GYWVpA29gyY5JAWLJAwGnxmbvGgALzauvpGkCZmAEQAjABMAMwALLkANBl6zABi6DB8okR4Jjg+iPSgABboovDk3jjo5pbW1d6+dGb5djLwAJ7UoABKiJTwjThpnpnGpqPBoTLMAJrkArj4kOTwYmycPOhW6AR8IrDQ8N04wmo4HHQCwYi2Waw2W1S6S8HX8gTGITsQA
https://www.typescriptlang.org/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA
*/
