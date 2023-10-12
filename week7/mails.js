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

const allId = []
mails.forEach((mail) => {
    allId.push(mail.id)
})
console.log(allId)