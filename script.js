// const eventemitter = require("node:events");
// const logger = new eventemitter();

// logger.on("message",function(){
//     console.log("message event");
// });
// logger.emit("message");

// logger.on("login",(req) =>{
//     if(req.username == 'admin' && req.password == "aman@321"){
//         console.log("Login Successful");
//     }
//     else{
//         console.log("Invalid Credentials");
//     }
// });

// logger.emit("login",{username : 'admin', password:'aman@341'});


const greetings = require("node:events");
const greet = new greetings();

greet.on("Greet", () => {
    const d = new Date();
    const hr = d.getHours();

    if (hr < 12) {
        console.log("Good Morning Aman");
    }
    else if (hr < 18) {
        console.log("Good Afternoon Aman");
    }
    else if (hr < 19) {
        console.log("Good Evening Aman");
    }
    else {
        console.log("Good Night Aman");
    }
});

greet.emit("Greet");