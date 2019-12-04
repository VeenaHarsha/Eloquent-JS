function now () {
  return 22
}

function later () {
  newVar = newVar * 2
  console.log('New value of variable : ' + newVar)
}

let newVar = now()
setTimeout(later, 1000)
console.log('Done!!')
