const message : string = "Hello World!";
const println = (message: string) => console.log(message);
println(message);

const user = {
    name: 'Thiago',
    age: 18,
    toString: function() {
        return `User -> ${this.name} (${this.age})`;
    },
}

// println(user); implicit call isn't supported, obviously.
println(user.toString());