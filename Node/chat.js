const eventraiser = require("node:events");
const user = new eventraiser();

user.on("Hello",()=>{
    console.log("Hello! How can I help You");
});

user.on("Balance related problem",()=>{
    console.log("Sorry, I am not able to help you with that");
})
user.on("credentials details",()=>{
    console.log("Here is your details");
});

// user.emit("Hello");
user.emit("credentials details");
user.emit("Balance related problem");
