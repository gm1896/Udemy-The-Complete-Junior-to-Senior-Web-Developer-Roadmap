// const sum = (a : number,b : number) => {
// 	return a+b;
// }

// const ans = sum(10,5);
// console.log(ans);

//Boolean 
let isCool: boolean = true

//Number
let age: number = 56;

//String
let eyecolor: string ='brown';
let identity: string = "Iron Man";
let favstring: string = `I am ${identity} `;

//Arrays
let pets: string[] = ['cat','dog','pig']
let pets2: Array<string> = ['lion','drgaon','lizard']

//Objects
let wizard: object = {
	a: 'John'
}

//Null and undefined
let meh:undefined = undefined;
let noooo:null = null;

//Tuple
let basket: [string,number];
basket= ['basketball',5];

enum size { Small=1, Medium=2,Large=3}
let sizeName: number = size.Small;


//ANY- !!!!!!!!!!!!!! BE CAREFULL!!!!!!!!!

let whatever: any = 'AHHHHHHHHHHHHHHHHHHHHHHHH';
whatever = 5;

// void
let sing = (): void=> {
	console.log("LALALALALALALALALALAAAALLA");
}

//never - function that never returns anything and doesnt have any endpoint
let error = ():never => {
	throw Error('Oops!')
}

//interface - create a new name which can be used as desried.
interface RobotArmy {
	count: number,
	type: string,
	magic?: string // ? means we can declare it as an optional attribute in the interface
}

let fightRobotArmy = (robots:RobotArmy) => {
	console.log('FIGHT!');
}

//type -type aliases doesnt create a new name (Similar to interface)
//Check documentation for more. However inerface is better than type to get the job done!
type RobotArmy2 = {
	count: number,
	type: string,
	magic: string
}

let fightRobotArmy2 = (robots:RobotArmy) => {
	console.log('FIGHT!');
}

// Type Assertions - allows you to overwrite a type in any way you want!

interface CatArmy {
	count: number,
	type: string,
	magic: string
}

let dog = {} as CatArmy
dog.count;

//Function 

let fightRobotArmy3 = (robots:RobotArmy): void => {
	console.log('FIGHT!');
}

//Class

class Animal{
	sing: string = 'LALALALA'
	constructor(sound:string) {
		this.sing = sound;
	}

	greet() {
	return `Hello ${this.sing}`
	}
}

let lion = new Animal('RAAAAAWWRR');
lion.greet();
lion.sing;

//Union
let confused: string | number| boolean = true


