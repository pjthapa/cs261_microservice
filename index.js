"use strict"

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/random_element", (req, res)=>{
  res.send("Hello World")
})

app.post("/random_element", (req, res)=>{
    let postList = req.body.list
    let postLength = postList.length
    let element = postList[between(0, postLength-1)]

    res.send(element)
})

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})