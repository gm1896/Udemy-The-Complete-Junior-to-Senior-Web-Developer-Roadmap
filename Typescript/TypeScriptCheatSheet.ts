//boolean
let isCool: boolean = false;

//number
let age: number = 56;

//string
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

//Array
let pets: string[] = ['cat', 'mouse', 'dragon'];
let pets2: Array<string> = ['pig', 'lion', 'dragon'];

//Tuple
let basket: [string, number];
basket = ['basketball', 10];

//Enum
enum Size {Small = 1, Medium, Large}
let sizeName: string = Size[2];
alert(sizeName); // Displays 'Medium' as its value is 2 above

//Any
let whatever: any = 'aaaaghhhhhh noooooo!';

//void
let sing = (): void => console.log('Lalalala')

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

//never
let error = (): never => {
  throw Error('blah!');
}

// Type Assertions:
let ohhithere: any = "OH HI THERE";

let strLength: number = (ohhithere as string).length;

//Interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy) =>{
  console.log('FIGHT!');
}
let fightRobotArmy2 = (robots: {count: number, type: string, magic?: string}) =>{
  console.log('FIGHT!');
}

//Function
let fightRobotArmyF = (robots: RobotArmy): void =>{
  console.log('FIGHT!');
}
let fightRobotArmy2F = (robots: {count: number, type: string, magic?: string}): void =>{
  console.log('FIGHT!');
}

// *** Classes
class Animal {
    private sing: string;
    constructor(sound: string) {
        this.sing = sound;
    }
    greet() {
        return "Hello, " + this.sing;
    }
}

let lion = new Animal("Lion");
// lion.sing


//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.

//Union Type
let confused: string | number = 'hello'