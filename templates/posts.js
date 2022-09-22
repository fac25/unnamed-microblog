function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ name, username, message }) {
  const time = new Date()
  console.log(name, username, message, 'hi')

  return `
    <div class='post-item'>
        <div class='profile'>
            <span class='name'>${sanitize(name)}</span> 
            <span class='username'>@${sanitize(username)}</span>
            <span class='time'> · ${time}</span>
        </div>
        <div class='message'>
          <span>${sanitize(message)}</span>
        </div>
    </div>
    `
}

function sanitize(unsafe) {
  return unsafe.replaceAll(/</g, '&lt;')
}

module.exports = posts
