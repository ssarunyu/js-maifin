const mail = {
    sender: 'SIT KMUTT',
    recipent: {
        firstname: 'Umaporn',
        lastname: 'Sup'
    },
    title: 'Welcome to KMUTT',
    sentDetails: {
        sentDate: new Date(Date.now()),
        host: {
            name: '@sit.kmutt'
        }
    }
}

const {recipent: {firstname}} = mail
console.log(firstname)
const {sentDetails: {host: {name}}} = mail
console.log(name)