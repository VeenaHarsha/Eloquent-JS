let numArr = [12, 34, 56, 2, 76, 8, 9, 43, 25, 29];
//sum
const sum = numArr.reduce((acc, val) => acc + val);
console.log(sum);

const sumFun = (acc, cv) => acc + cv;
//myReduce
const myReduce = function(arr, func, start) {
  let currVal = start;
  for (let ele of arr) {
    currVal = func(currVal, ele);
  }
  return currVal;
};
console.log(myReduce(numArr, sumFun, 0));

//biggest of array
const big = numArr.reduce((acc, cv) => {
  return acc > cv ? acc : cv;
});
console.log(big);

// Implementing map with reduce
let arr = [1, 2, 3, 4, 5];
let result1 = arr.map(ele => ele * 100);
console.log(result1);
//-------------------------------------
let result2 = arr.reduce((acc, cv) => {
  acc.push(cv * 100);
  return acc;
}, []);
console.log(result2);

//Imlementing filter with Reduce
let arr2 = [23, 45, 57, 67, 75, 78];
console.log(arr2.filter(ele => ele % 5 === 0));
//--------------------------------------
let result3 = arr2.reduce((acc, cv) => {
  if(cv%5 === 0){
    acc.push(cv);
  }
  return acc
}, []);
console.log(result3) 

//Remove Duplicates
let dupes = [12,23,1,2,12,23,34,45,34]
let r = dupes.reduce((acc,cur)=>{
  if(acc.indexOf(cur) === -1 ){
    acc.push(cur)
  }
  return acc
},[])
console.log(r)

const obj = numArr.reduce((acc,cv)=>{
  acc[cv] = cv;
  return acc
},{})
console.log(obj)