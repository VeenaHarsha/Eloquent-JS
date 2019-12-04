new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000)
}).then(res1 => {
  console.log(res1)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(res1 * 2), 2000)
  })
}).then(res2 => {
  console.log(res2)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(res2 * 4), 2000)
  })
}).then((res3) => {
  console.log(res3)
})
