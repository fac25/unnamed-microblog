function time() {
  const date = Date.now();

  return date;
 }

function form() {
  return `
    <form method='POST' id="form" class='container'>
        <input id="username" name="username" placeholder='Username'>
        <textarea id="message" name="message" placeholder='Message' rows="8" cols="50" maxlength="280"></textarea>
        <button type="submit">Twoot</button>
    </form>
        `
}

module.exports = { form }
