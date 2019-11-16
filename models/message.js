const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

class Message {
  constructor(email, message) {
    this.email = email;
    this.message = message;
    this.id = uuid();
  }

  async save() {
    const messages = await Message.getAll()

    messages.push({
      email: this.email,
      message: this.message,
      id: this.id
    })

    return new Promise((res, rej) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'message.json'),
        JSON.stringify(messages),
        (err) => {
          if (err){
            rej(err)
          } else {
            res()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((res, rej) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'message.json'),
        'utf-8',
        (err, data) => {
          if (err){
            rej(err)
          } else {
            res(JSON.parse(data))
          }
        }
      )
    })
  }
}

module.exports = Message