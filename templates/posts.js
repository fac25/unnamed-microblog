function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ handler, username, message}) {
  const time = new Date();

  return `
    <div class='post-item'>
        <div class='profile'>
            <span class='username'>${username}</span> 
            <span class='handler'>@${handler || "anonymoustwooter"}</span>
            <span class='time'> · ${time}</span>
        </div>
        <div class='message'>
          <span>${message}</span>
        </div>
    </div>
    `
}


module.exports = posts
