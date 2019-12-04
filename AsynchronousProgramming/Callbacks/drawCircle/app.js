function showCircle (cx, cy, radius, callback) {
  let target
  if ((target = document.getElementById('circle'))) {
    target.remove()
  }
  const circle = document.createElement('div')
  circle.id = 'circle'
  circle.style.left = cx + 'px'
  circle.style.top = cy + 'px'
  circle.style.width = 0
  circle.style.height = 0
  circle.style.position = 'absolute'
  circle.style.backgroundColor = 'red'
  circle.style.borderRadius = '50%'
  circle.style.transform = 'translateX(-50%) translateY(-50%)'
  document.body.append(circle)
  function anim () {
    const height = parseInt(circle.style.width)
    const width = parseInt(circle.style.width)
    if (width >= radius * 2) {
      callback(null, circle)
      return
    }
    circle.style.width = width + 1 + 'px'
    circle.style.height = height + 1 + 'px'
    requestAnimationFrame(anim)
  }
  requestAnimationFrame(anim)
}
button.addEventListener('click', () => {
  showCircle(150, 150, 100, (err, div) => {
    if (err) {
      new Error(err.message)
    } else {
      div.style.display = 'flex'
      div.style.justifyContent = 'center'
      div.style.alignItems = 'center'
      div.style.fontSize = '20px'
      div.style.textAlign = 'center'
      div.append('Hello, World')
    }
  })
})