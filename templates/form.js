function form() {
  return `
    <form method='POST'>
        <label for="username">Username</label>
        <input id="username" name="username">
        <label for="message">Message</label>
        <input id="message" name="message">
        <button type="submit">Post message</button>
    </form>
        `
}

module.exports = { form }
