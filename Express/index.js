const express = require('express');
const app = express();
const port = 3000;

app.use('/static');
app.get('/',(req,res) => {
    console.log("Hello bhai mai yhi hu");
});

app.get('/about',(req,res) => {
    console.log("Hello bhai mai about section mai hu");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});