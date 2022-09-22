function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ username, message }) {
  return `
    <div class='post-item'>
        <div class='profile'>
            <span class='username'>${username}</span>
        </div>
        <div><span>${message}</span></div>
    </div>`
}

module.exports = posts
