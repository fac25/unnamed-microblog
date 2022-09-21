function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ username, message }) {
  return `
    <div class='container'>
        <div class='profile-container'>
            <span class='username'>${username}</span>
        </div>
        <div><span>${message}</span></div>
    </div>`
}

module.exports = posts
