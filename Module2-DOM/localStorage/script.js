// Sample array of user objects
const users = [{
        id: 1,
        name: 'Alice',
        age: 25
    },
    {
        id: 2,
        name: 'Bob',
        age: 30
    },
    {
        id: 3,
        name: 'Charlie',
        age: 22
    }
];

// Storing the array of objects in a cookie
document.cookie = `users=${JSON.stringify(users)}`;

// Retrieving the array of objects from the cookie
const cookieValue = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('users='))
    .split('=')[1];

const parsedUsersFromCookie = JSON.parse(cookieValue);
console.log(parsedUsersFromCookie); // Output: Array of user objects

// Storing the array of objects in localStorage
localStorage.setItem('users', JSON.stringify(users));

// Retrieving the array of objects from localStorage
const usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
console.log(usersFromLocalStorage); // Output: Array of user objects