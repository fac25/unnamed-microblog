function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ handler, username, message }) {
  const time = new Date()

  return `
    <div class='post-item'>
        <div class='profile'>
            <span class='username'>${sanitize(username)}</span> 
            <span class='handler'>@${sanitize(
              handler || 'anonymoustwooter'
            )}</span>
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
