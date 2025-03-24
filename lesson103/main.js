"use strict";

const aboutMe = {
    name: "Evgeiny",
    age: 31,
    greet: function (userName) {
        return `Hello ${userName}`;
    },
};
console.log(aboutMe.greet("Evgeniy"));

const users = [
    { name: "Alex", age: 25, isAdmin: false },
    { name: "John", age: 34, isAdmin: true },
    { name: "Bob", age: 19, isAdmin: false },
    { name: "Dylan", age: 45, isAdmin: false },
    { name: "Dereck", age: 20, isAdmin: true },
    { name: "Maks", age: 36, isAdmin: false },
];
let usersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        usersCount++;
    }
}
console.log(usersCount);
