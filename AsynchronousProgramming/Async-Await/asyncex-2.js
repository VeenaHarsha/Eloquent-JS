const resolveAfter2Secs = function () {
  console.log('Starting slow Promise..')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('slower')
      console.log('slow promise is done!')
    }, 2000)
  })
}
const resolveAfter1Sec = function () {
  console.log('Starting faster promise..')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('faster')
      console.log('Faster promise is done..')
    }, 1000)
  })
}
const sequentialStart = async function () {
  console.log('------Sequential Start-------------')
  const slow = await resolveAfter2Secs()
  console.log(slow)

  const fast = await resolveAfter1Sec()
  console.log(fast)
}
const concurrentStart = async function () {
  console.log('----------Concurrent Start--------------')
  const slow = resolveAfter2Secs()
  const fast = resolveAfter1Sec()
  console.log(await slow)
  console.log(await fast)
}
const concurrentPromise = function () {
  console.log('------Concurrent start with Promise.All---------')
  return Promise.all([resolveAfter2Secs(), resolveAfter1Sec()]).then(messages => {
    console.log(messages[0])
    console.log(messages[1])
  })
}

const parallel = async function () {
  console.log('-------Parallel with Await & Promise.all---------')
  await Promise.all([
    (async () => console.log(await resolveAfter2Secs()))(),
    (async () => console.log(await resolveAfter1Sec()))()
  ])
}

const parallelPromise = function () {
  console.log('--------PARALLEL with Promise.then--------')
  resolveAfter2Secs().then((message) => console.log(message))
  resolveAfter1Sec().then((message) => console.log(message))
}

// sequentialStart()
// concurrentStart()
// concurrentPromise()
sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000) // same as concurrentStart

// wait again
setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"

// wait again
setTimeout(parallelPromise, 13000) // same as parallel
