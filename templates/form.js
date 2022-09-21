function time() {
  const date = Date.now();

  return date;
 }

function form() {
  return `
    <form method='POST' id="form">
        <label for="username">Username</label>
        <input id="username" name="username">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="8" cols="50" maxlength="280"></textarea>
        <button type="submit">Post message</button>
    </form>
        `
}

module.exports = { form }
