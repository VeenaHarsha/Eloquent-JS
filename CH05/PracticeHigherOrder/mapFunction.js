let strArr = ["cat", "spike", "dollar", "farm","flower"];
//convert strArr into integer array with string lengths
//using map function
const findLength = ele => ele.length
const newArrOfInts = strArr.map(findLength)
console.log(newArrOfInts)

// writing myMap
const myMap = (arr,lenFun)=>{
  let result = []
  for(let ele of arr){
    result.push(ele.length)
  }
  return result
}
console.log(myMap(strArr,findLength))

//Implementing Map using Reduce to be done