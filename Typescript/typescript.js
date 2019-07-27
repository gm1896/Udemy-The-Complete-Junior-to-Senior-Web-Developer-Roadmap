// const sum = (a : number,b : number) => {
// 	return a+b;
// }
// const ans = sum(10,5);
// console.log(ans);
//Boolean 
var isCool = true;
//Number
var age = 56;
//String
var eyecolor = 'brown';
var identity = "Iron Man";
var favstring = "I am " + identity + " ";
//Arrays
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'drgaon', 'lizard'];
//Objects
var wizard = {
    a: 'John'
};
//Null and undefined
var meh = undefined;
var noooo = null;
//Tuple
var basket;
basket = ['basketball', 5];
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
var sizeName = size.Small;
//ANY- !!!!!!!!!!!!!! BE CAREFULL!!!!!!!!!
var whatever = 'AHHHHHHHHHHHHHHHHHHHHHHHH';
whatever = 5;
// void
var sing = function () {
    console.log("LALALALALALALALALALAAAALLA");
};
//never - function that never returns anything and doesnt have any endpoint
var error = function () {
    throw Error('Oops!');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
//Function 
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'LALALALA';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAAAWWRR');
lion.greet();
lion.sing;
//Union
var confused = true;
