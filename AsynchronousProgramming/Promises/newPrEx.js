const pr = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000)
})
pr.then((x) => console.log(x))
