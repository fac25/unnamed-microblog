    function form() {
        return `
            <!doctype html>
                <html>
                    <head>
                        <title>Twitter clone</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                    </head>
                    <body>
                        <form>
                            <label for="username">Username</label>
                            <input id="username" name="username">
                            <label for="message">Message</label>
                            <input id="message" name="message">
                            <button type="submit">Post message</button>
                        </form>
                    </body>

                </html>;
        `
    }

module.exports = { form };