// for(let num = 1; num <= 100; num++){
//   let output = ""
//   if(num % 3 === 0) output+="Fizz"
//   if(num % 5 === 0) output+="Buzz"
//   console.log(output || num)
// }

for (let n = 1; n <= 100; n++) {
let output = "";
  if (n % 3 === 0 && n % 5 === 0) {
    output = "FizzBuzz";
  } else if (n % 3 === 0) {
    output = "Fizz";
  } else if (n % 5 === 0) {
    output = "Buzz";
  } 
  console.log(output || n );
}

