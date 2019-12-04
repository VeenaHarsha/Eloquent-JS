function resolveAfter (time) {
  return new Promise((resolve,reject)=> {
    setTimeout(() => {
      resolve('done')
    }, time)
  })
}
async function callAsync () {
  console.log('Start...')
  const result = await resolveAfter(1000)
  console.log(result)
  console.log('Stopp...')
}

callAsync()
console.log('Where am I')