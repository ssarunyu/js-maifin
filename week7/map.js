// Different of
// Map and forEach = map create own new array
// if use forEach we need to defined new array first
// Can select some value in array

const mails = [
    {
        id: 1243147923,
        sender: {
            name: 'Sarunyu',
            age: 19
        },
        subject: 'Hello welcome'
    },
    {
        id: 4359823423,
        sender: {
            name: 'Inrita',
            age: 19
        },
        subject: 'Hi guys!'
    }
]

const mailSenders = mails.map((mail) => mail.sender.name)
console.log(mailSenders)

const logMailId = mails.map((mail) => `log-id : ${mail.id}`)
console.log(logMailId)