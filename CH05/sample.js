let newArr = [ 2, 1, 12, 3, 1, 4, 5, 2 ];

let fres = newArr.filter((ele, index, arr) => {
	console.log(arr.indexOf(ele) + ':' + index + ':' + ele);
	return arr.indexOf(ele) === index;
});
console.log(fres);

let rs = newArr.reduce((acc, cv) => {
	if (acc.indexOf(cv) === -1) {
		acc.push(cv);
	}
	return acc;
}, []);
console.log(rs);

let mee = 'veena';
function greet() {
	console.log('Hello this is ' + mee);
}
greet();
mee = 'Vasista';
