const express = require('express');

const app = express();
const port = 5000;

app.listen(port, ()=>{
    console.log("App Start")
})

app.get('/qs/qw', (req,res)=>{
    return res.json('Hello12')
});

app.post('/', (req,res)=>{
    return res.json("Post")
})

app.put('/', (req,res)=>{
    return res.json("Put")
})

app.delete('/', (req,res)=>{
    return res.json("Delete")
})