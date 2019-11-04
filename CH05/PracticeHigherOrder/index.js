let vehicles = [
  { make: "TOYOTA",model: "Corolla",color: "Silver", price: 500000, dAge: 21 },
  { make: "TOYOTA", model: "Camry", color: "Black", price: 800000, dAge: 21 },
  { make: "VOLKS", model: "Polo", color: "Red",price: 1000000, dAge: 21},
  { make: "FORD", model: "Fiesta", color: "Orange", price: 1500000, dAge: 21 },
  { make: "NISSAN", model: "Titan", color: "Yellow", price: 5700000, dAge: 21},
  { make: "TATA", model: "Nano", color: "Yellow", price: 70000, dAge: 18 },
  { make: "TATA", model: "ALTO", color: "Green", price: 80000, dAge: 18 }
];

let numArr = [12, 34, 56, 2, 76, 8, 9, 43, 25, 29];

let humans = [
  { name : "John" , age : 19},
  { name : "Peter" , age : 25},
  { name : "Mark" , age : 32},
  { name : "Ethen" , age : 45},
  { name : "Sandy" , age : 65},
  { name : "Mike" , age : 9},
  { name : "Sara" , age : 6}
]

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// numArr.forEach(function(n){
//   console.log(n);
// })

//filter -- FIltering Voting Age

//Using Forloop
let canVote = [];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 18) {
    canVote.push(numArr[i]);
  }
}
console.log(canVote);

//using Filter
const voters = humans.filter(function(h) {
  if (h.age >= 18) return true;
});
console.log(voters);

//filter vehicles with make - Toyota
//console.log(vehicles.filter(v=>v.make === "TOYOTA"));
const lowPriceVeh = vehicles.filter(v => 
  v.price < 500000
  );
//  console.log(lowPriceVeh)

//Filter the vehicles with Brand and Color
const getMyCar = vehicles
                .filter(v => v.price < 5000000)
                .filter(v => v.color=="Red")
console.log(getMyCar)


//map
const numSquare = numArr.map(n=>n*2);
console.log(numSquare)

//reduce
const add = numArr.reduce((a,b)=>a+b,0)
console.log(add)

//composite
let combined = numArr.map(no=>no*2)
              .filter(no=>no >= 100)
              .reduce((a,b)=>a+b,0)
console.log(combined);

