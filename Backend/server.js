/* eslint-disable no-undef */
const express = require('express');
const notes =  require('./Data/notes.js')
const dotenv = require('dotenv');


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send("API TESTING");
})
app.get('/api/notes',(req,res)=>{
    res.json(notes);

})
app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n)=>n._id === req.params.id);
    res.json(note);
})
app.listen(PORT,console.log(`server started at ${PORT}`));