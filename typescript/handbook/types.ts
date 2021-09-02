/*
    GENERIC TYPES
*/

interface Personn {
    name: string;
}

const echo = <T>(obj: T): T => obj;
let text = echo("Hello World!");
let num = echo(5);
let bool = echo(true);
let p = echo<Personn>({name: 'Thiago'});
let p2 = echo(p);


/*
    KEYOF types
*/

type NiceArray = {
    [i: number]: string;
}

type NiceMap = {
    [k: string]: string;
}

type NA = keyof NiceArray;
type NM = keyof NiceMap;
/*
Note that in this example, M is string | number — this is because JavaScript object keys are always coerced 
to a string, so obj[0] is always the same as obj["0"].
*/

/*
    TYPEOF types
*/

type PredicateFunction = (x: unknown) => boolean;

function fn() {
    return {
        data: 'a lot',
        number: 59,
        bool: true,
    };
}

type PF = ReturnType<PredicateFunction>;
type TF = ReturnType<typeof fn>;

let sameAsReturn : TF = {
    data: 'data',
    number: 0,
    bool: true,
};

/*
    MAPPED TYPES
*/

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;