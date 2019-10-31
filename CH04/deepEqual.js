  function deepEqual(obj1, obj2) {
    if (obj1 === obj2)   return true;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    if ((typeof obj1 !== "object" || obj1 === null) ||
      (typeof obj2 !== "object" || obj2 === null)) return false
    
        for (let key of Object.keys(obj1)) {
          if (!Object.keys(obj2).includes(key) || deepEqual(obj1[key],obj2[key])) 
        return false
        }
  }
  



function deepEqual_old(obj1, obj2) {
  let o1Keys = Object.keys(obj1),
      o2Keys = Object.keys(obj2);

  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    (typeof obj2 !== "object" || obj2 === null)
  )
    return false;

  if (o1Keys.length !== o2Keys.length) return false;

  for (let key of o1Keys) {
    if (!o2Keys.includes(key) || deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

//let obj = { here: 1, object: 2 };
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log("****************");
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log("****************");
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
console.log("****************");
console.log(deepEqual(12, 12));
