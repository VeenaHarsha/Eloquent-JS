function min(a,b){
  return ( a < b ? a : b);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function isEven(num){
  if(num === 0) return true
  if(num === 1) return false
  if(num < 0 ) return isEven(-num)
  return isEven(num - 2)
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

function countBs(str){
  let counter = 0;
   for(let i = 0; i< str.length;i++){
     if(str[i] === 'B') ++counter
   }
   return counter;
 }
function countChar(str,ch){
  let counter = 0;
   for(let i = 0; i< str.length;i++){
     if(str[i] === ch) ++counter
   }
   return counter;
 }
//  function countBs(str){
//    return countChar(str,'B')
//  }
 console.log(countBs("BBC"));
 // → 2
 console.log(countChar("kakkerlak", "k"));
 // → 4