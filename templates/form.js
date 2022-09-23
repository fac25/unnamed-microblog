function form(values) {
  return `
    <form method='POST' id="form" class='container'>
        <input id="username" name="username" placeholder='Username' value='${
          values.username ? values.username : ''
        }'>
        <textarea id="message" name="message" placeholder='Message' rows="8" cols="50" maxlength="280" >${
          values.message ? values.message : ''
        }</textarea>
        <button type="submit">Twoot</button>
    </form>
        `
}

module.exports = { form }
