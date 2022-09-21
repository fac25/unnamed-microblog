function posts(postsArr) {
  return `${postsArr.map(postItem).join('')}`
}

function postItem({ username, message, src }) {
  return `
    <div class='container'>
        <div class='profile-container'>
            <img src=${src}/>
            <span class='username'>${username}</span>
        </div>
        <div><span>${message}</span></div>
    </div>`
}

module.exports = posts
