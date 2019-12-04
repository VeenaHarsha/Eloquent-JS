function promisifyTimer (timer) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timer)
  })
}
promisifyTimer(1000).then(() => console.log('HELLO!!')).catch(() => console.log('Failed!!'))
console.log('say Hello after 1000 ms')
