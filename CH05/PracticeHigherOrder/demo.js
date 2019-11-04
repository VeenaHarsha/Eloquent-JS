let numArr = [ 12, 34, 56, 2, 76, 8, 9, 43, 25, 29 ];

for (let i = 0; i < numArr.length; i++) {
	console.log(numArr[i]);
}
const callBk = (ele, index, arr) => {
	console.log(`${ele} : ${index} : ${arr[index]}`);
};
const aVal = numArr.forEach(callBk);

// //filter

const f = (ele => ele%2 !== 0)
const odd = numArr.filter(f)
console.log(odd)

const squares = numArr.reduce((acc, num) => {
	acc.push(num * num);
	return acc;
}, []);
//console.log('squares', squares);
const sumSq = squares.reduce((acc, ele) => {
	acc += ele;
	return acc;
}, 1000);
//console.log(sumSq)
console.log(numArr);
const objects = numArr.reduce((acc, cv) => {
	acc[cv] = cv;
	return acc;
}, {});
console.log('Objects', objects);
// {'144': 144, }

