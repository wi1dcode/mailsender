// sendEmail.js

require("dotenv").config()
const mailer = require("./mailer")

mailer.sendMail(
  {
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: "This is a test email",
    text: "New test mail",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err)
    else console.log(info)
  }
)
