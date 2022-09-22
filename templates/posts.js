function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ handler, username, message }) {
  const date = new Date()
  const hours = date.getHours()
  let minutes = date.getMinutes()
  if (minutes<10) minutes = `0${minutes}`
  const time =  `${hours}:${minutes}`

  
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
