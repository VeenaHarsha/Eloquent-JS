const postsArr = [{ title: 'post1', body: 'This is post one content' },
  { title: 'post2', body: 'This is post two content' }]

function getPosts () {
  setTimeout(() => {
    postsArr.forEach(p => console.log(p.title))
  }, 2000)
}

function createPosts (post,callback) {
  setTimeout(() => {
    postsArr.push(post)
    callback()
  },2000)
}

createPosts({title:'post4', body: 'This is post four content'}, getPosts)