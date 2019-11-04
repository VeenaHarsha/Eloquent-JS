/*Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/
let user = {};
user.name = 'John';
user.surName = 'Smith';

user.name = 'Peter';
delete user.name;

/*Write the function isEmpty(obj) which returns true if the object has no properties,
 false otherwise. */

const isEmpty = function(obj) {
	if (Object.keys(obj).length === 0) return true;
	return false;
};

const isEmptyObj = function(obj) {
	for (let k in obj) {
		return false;
	}
	return true;
};
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

// Is it possible to change an object declared with const? What do you think?
const newObj = {
	name: 'Veer'
};
newObj.name = 'Vikram';
//Object properties are mutated even if the object is constant

/*
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0 
*/
let salaries = {
	john: 100,
	anne: 160,
	pete: 130
};
let sum = 0;
for (let s in salaries) {
	sum += salaries[s];
}
console.log(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
let menu = {
	width: 200,
	height: 100,
	title: 'My Menu'
};

const multiply = function(menu) {
	for (let k in menu) {
		if (typeof menu[k] === 'number') {
			menu[k] = menu[k] * 2;
		}
	}
	return menu;
};

console.log(multiply(menu));
// Create an object calculator with three methods:

//     read() prompts for two values and saves them as object properties.
//     sum() returns the sum of saved values.
//     mul() multiplies saved values and returns the result.

let calculator = {
	read(x, y) {
		this.x = x;
		this.y = y;
	},
	sum() {
		return this.x + this.y;
	},
	mul() {
		return this.x * this.y;
	}
};
calculator.read(10, 20);
console.log(calculator.sum());
console.log(calculator.mul());
